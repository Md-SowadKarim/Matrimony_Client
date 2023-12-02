import React from 'react'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import { useEffect, useState } from 'react'
import './CheckoutForm.css'
import useAuth from '../../hooks/useAuth'
import { ImSpinner9 } from 'react-icons/im'
import { useNavigate } from 'react-router-dom';
import { createPaymentIntent, saveBookingInfo } from './../../api/bookings';
import { toast } from 'react-hot-toast';
import { bioRequest } from './../../api/request';

const CheckOutForm = ({bookingInfo}) => {
    console.log(bookingInfo)
    const stripe = useStripe()
    const elements = useElements()
    const { user } = useAuth()
    const [cardError, setCardError] = useState('')
    const [clientSecret, setClientSecret] = useState('')
    const [processing, setProcessing] = useState(false)
    const navigate = useNavigate()
    useEffect(() => {
        // create payment intent
       
          createPaymentIntent({ price: 100 }).then(data => {
            console.log(data.clientSecret)
            setClientSecret(data.clientSecret)
          })
        
      }, [bookingInfo])


      const handleSubmit = async event => {
        event.preventDefault()
    
        if (!stripe || !elements) {
          return
        }
    
        const card = elements.getElement(CardElement)
        if (card === null) {
          return
        }
    
        // Card data lookup (Asynchronous Network Call )
        const { paymentMethod, error } = await stripe.createPaymentMethod({
          type: 'card',
          card,
        })
    
        if (error) {
          console.log('error', error)
          setCardError(error.message)
        } else {
          setCardError('')
          console.log('payment method', paymentMethod)
        }
    
        setProcessing(true)
    
        // Ekhane taka katbe
        const { paymentIntent, error: confirmError } =
          await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
              card: card,
              billing_details: {
                email: user?.email,
                name: user?.displayName,
              },
            },
          })
    
        if (confirmError) {
          console.log(confirmError)
          setCardError(confirmError.message)
        }
    
        console.log('payment intent', paymentIntent)
    
        if (paymentIntent.status === 'succeeded') {
          const paymentInfo = {
            ...bookingInfo,
            transactionId: paymentIntent.id,
            date: new Date(),
          }
           try {
             // save payment information to the server
           await saveBookingInfo(paymentInfo)
    
            // Update room status in db
        //  //   await updateStatus(bookingInfo.roomId, true)
             const text = `Booking Successful! ${paymentIntent.id}`
             toast.success(text)
        //   //  navigate('/dashboard/my-bookings')
          }catch (err) {
            console.log(err)
            toast.error(err.message)
          } finally {
            setProcessing(false)
          }

       
        }
      }
  return (
    <>
    <form className='my-2' onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <div className='flex mt-2 justify-around'>
        <button
          type='submit'
          disabled={!stripe || !clientSecret || processing}
          className='btn btn-primary bg-blue-400 w-full mx-auto m-4 border-4 border-blue-700 px-4 rounded-xl my-2'
        >
          {processing ? (
            <ImSpinner9 className='m-auto animate-spin' size={24} />
          ) : (
            `Pay ${100 }$`
          )}
        </button>
      </div>
    </form>
    {cardError && <p className='text-red-600 ml-8'>{cardError}</p>}
  </>
  )
}

export default CheckOutForm
