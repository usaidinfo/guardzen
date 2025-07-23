
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Package, Truck, CheckCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface OrderStatus {
  id: string;
  status: 'processing' | 'shipped' | 'delivered';
  orderDate: string;
  items: {
    name: string;
    quantity: number;
    price: number;
  }[];
  total: number;
  trackingNumber: string;
  estimatedDelivery: string;
  updates: {
    date: string;
    status: string;
    location: string;
  }[];
}

const mockOrders: Record<string, OrderStatus> = {
  'GZ-2024-001': {
    id: 'GZ-2024-001',
    status: 'delivered',
    orderDate: '2024-01-15',
    items: [
      { name: 'Pro Sports Guard', quantity: 1, price: 149.99 },
    ],
    total: 149.99,
    trackingNumber: 'TRK123456789',
    estimatedDelivery: '2024-01-20',
    updates: [
      { date: '2024-01-20', status: 'Delivered', location: 'New York, NY' },
      { date: '2024-01-19', status: 'Out for delivery', location: 'New York, NY' },
      { date: '2024-01-18', status: 'In transit', location: 'Newark, NJ' },
      { date: '2024-01-16', status: 'Shipped', location: 'GuardZen Facility' },
      { date: '2024-01-15', status: 'Processing', location: 'GuardZen Facility' },
    ]
  },
  'GZ-2024-002': {
    id: 'GZ-2024-002',
    status: 'shipped',
    orderDate: '2024-01-22',
    items: [
      { name: 'Night Guard Plus', quantity: 1, price: 89.99 },
      { name: 'Youth Sports Guard', quantity: 1, price: 69.99 },
    ],
    total: 159.98,
    trackingNumber: 'TRK987654321',
    estimatedDelivery: '2024-01-27',
    updates: [
      { date: '2024-01-24', status: 'In transit', location: 'Chicago, IL' },
      { date: '2024-01-23', status: 'Shipped', location: 'GuardZen Facility' },
      { date: '2024-01-22', status: 'Processing', location: 'GuardZen Facility' },
    ]
  }
};

export default function TrackOrderPage() {
  const [orderNumber, setOrderNumber] = useState('');
  const [searchResult, setSearchResult] = useState<OrderStatus | null>(null);
  const [isSearching, setIsSearching] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!orderNumber.trim()) return;

    setIsSearching(true);
    setError('');
    setSearchResult(null);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    const order = mockOrders[orderNumber.trim()];
    if (order) {
      setSearchResult(order);
    } else {
      setError('Order not found. Please check your order number and try again.');
    }

    setIsSearching(false);
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'processing':
        return <Package className="h-5 w-5 text-blue-600" />;
      case 'shipped':
        return <Truck className="h-5 w-5 text-orange-600" />;
      case 'delivered':
        return <CheckCircle className="h-5 w-5 text-green-600" />;
      default:
        return <Package className="h-5 w-5 text-gray-600" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'processing':
        return 'text-blue-600 bg-blue-100';
      case 'shipped':
        return 'text-orange-600 bg-orange-100';
      case 'delivered':
        return 'text-green-600 bg-green-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Track Your Order
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Enter your order number to get real-time updates on your GuardZen products.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8"
          >
            <form onSubmit={handleSearch} className="mb-8">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <input
                    type="text"
                    value={orderNumber}
                    onChange={(e) => setOrderNumber(e.target.value)}
                    placeholder="Enter your order number (e.g., GZ-2024-001)"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSearching}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 disabled:bg-blue-400 transition-colors duration-200 flex items-center justify-center space-x-2 whitespace-nowrap"
                >
                  {isSearching ? (
                    <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></div>
                  ) : (
                    <>
                      <Search className="h-5 w-5" />
                      <span>Track Order</span>
                    </>
                  )}
                </button>
              </div>
            </form>

            {error && (
              <div className="mb-8 p-4 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-lg">
                {error}
              </div>
            )}

            {searchResult && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                      Order {searchResult.id}
                    </h2>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(searchResult.status)}`}>
                      {searchResult.status.charAt(0).toUpperCase() + searchResult.status.slice(1)}
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <span className="text-gray-600 dark:text-gray-400">Order Date:</span>
                      <div className="font-semibold">{new Date(searchResult.orderDate).toLocaleDateString()}</div>
                    </div>
                    <div>
                      <span className="text-gray-600 dark:text-gray-400">Tracking Number:</span>
                      <div className="font-semibold">{searchResult.trackingNumber}</div>
                    </div>
                    <div>
                      <span className="text-gray-600 dark:text-gray-400">Estimated Delivery:</span>
                      <div className="font-semibold">{new Date(searchResult.estimatedDelivery).toLocaleDateString()}</div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Order Items</h3>
                  <div className="space-y-3">
                    {searchResult.items.map((item, index) => (
                      <div key={index} className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <div>
                          <div className="font-medium text-gray-900 dark:text-white">{item.name}</div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">Quantity: {item.quantity}</div>
                        </div>
                        <div className="font-semibold text-gray-900 dark:text-white">${item.price}</div>
                      </div>
                    ))}
                    <div className="flex justify-between items-center p-3 bg-blue-50 dark:bg-blue-900 rounded-lg">
                      <div className="font-semibold text-gray-900 dark:text-white">Total</div>
                      <div className="font-bold text-gray-900 dark:text-white">${searchResult.total}</div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Tracking Updates</h3>
                  <div className="space-y-4">
                    {searchResult.updates.map((update, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="flex-shrink-0 mt-1">
                          {getStatusIcon(update.status.toLowerCase())}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <div className="font-medium text-gray-900 dark:text-white">{update.status}</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">
                              {new Date(update.date).toLocaleDateString()}
                            </div>
                          </div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">{update.location}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            <div className="mt-8 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Demo Order Numbers:</h3>
              <div className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <div>GZ-2024-001 (Delivered)</div>
                <div>GZ-2024-002 (Shipped)</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
