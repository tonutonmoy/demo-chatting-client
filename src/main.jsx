import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {

  RouterProvider,
} from "react-router-dom";

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Provider from './Provider/Provider.jsx'
import { router } from './Router/Router.jsx';



const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>

      <Provider>
      <RouterProvider router={router} />
      </Provider>

    </QueryClientProvider>
  </React.StrictMode>,
)
