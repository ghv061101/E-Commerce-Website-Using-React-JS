import React, { useState } from 'react';
import { products } from '../assets/frontend_assets/assets'; // Import products data

const Chatbot = () => {
  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState([
    { text: 'Hello! How can I assist you with clothing today?', type: 'bot' }
  ]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [isOpen, setIsOpen] = useState(true); // State to handle visibility

  // Find products based on user query (clothing-related)
  const findProducts = (query) => {
    const queryLower = query.toLowerCase();
    return products.filter(product =>
      product.name.toLowerCase().includes(queryLower) ||
      product.category.toLowerCase().includes(queryLower) ||
      product.subCategory.toLowerCase().includes(queryLower)
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessages(prevMessages => [...prevMessages, { text: `You asked for: ${query}`, type: 'user' }]);
    
    try {
      setLoading(true);
      setError('');
      
      // Simulate an API call or search
      setTimeout(() => {
        const suitableProducts = findProducts(query);

        if (suitableProducts.length > 0) {
          const productMessages = suitableProducts.map(product =>
            `${product.name} - ${product.price}$: ${product.description}\nSizes: ${product.sizes.join(', ')}`
          ).join('\n\n');
          setMessages(prevMessages => [...prevMessages, { text: productMessages, type: 'bot' }]);
        } else {
          setMessages(prevMessages => [...prevMessages, { text: 'Sorry, no clothing items found.', type: 'bot' }]);
        }
        
        setLoading(false);
      }, 1000);
      
    } catch (err) {
      setError('Failed to process your request. Please try again.');
      setMessages(prevMessages => [...prevMessages, { text: 'Failed to process your request. Please try again.', type: 'bot' }]);
      setLoading(false);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <div className="fixed bottom-4 right-4 w-80 bg-white shadow-lg rounded-lg border border-gray-300">
          <button
            onClick={handleClose}
            className="absolute top-2 right-2 w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center"
            aria-label="Close Chatbot"
          >
            ✖️
          </button>
          <div className="p-4 h-96 overflow-y-auto">
            <div className="flex flex-col h-full">
              {messages.map((msg, index) => (
                <div key={index} className={`mb-2 ${msg.type === 'bot' ? 'text-left' : 'text-right'}`}>
                  <div className={`p-2 rounded-lg ${msg.type === 'bot' ? 'bg-white text-gray-800' : 'bg-blue-500 text-white'}`}>
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <form onSubmit={handleSubmit} className="p-4 border-t border-gray-200 bg-white">
            <label htmlFor="query" className="block text-gray-600 mb-2">What clothing are you looking for?</label>
            <input
              id="query"
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full p-2 mb-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g. T-shirt, Jacket"
            />
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition duration-300"
              disabled={loading}
            >
              {loading ? 'Searching...' : 'Find Clothing'}
            </button>
            {error && <p className="text-red-500 mt-2">{error}</p>}
          </form>
        </div>
      )}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 bg-blue-500 text-white p-2 rounded-full shadow-lg hover:bg-blue-600 transition duration-300"
        aria-label="Open Chatbot"
        style={{ display: isOpen ? 'none' : 'block' }}
      >
        💬
      </button>
    </>
  );
};

export default Chatbot;
