import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MockApiComponent = () => {
  const [content, setContent] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  /**
   * handleSubmit
   *
   * Invokes the API integrated with Lambda and sets the response in state.
   */
  const handleSubmit = async () => {
    try {
      // Invoke the API integrated with Lambda
      const response = await axios.post("/api/authenticate",{},{
        headers: {
          'Content-Type': 'application/json',
          'access-control-allow-origin': '*'
          
        }
      });
      console.log("response===========",response);
      // Set the response in state
      setContent(response.data.name);
    } catch (error) {
      // Set any error messages in state
      setErrorMessage(error.message || 'An error occurred');
    }
  };

  return (
    <div>
      <h1>API Response</h1>

      <button onClick={handleSubmit}>Invoke</button>

      {content && <p>{content}</p>}
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};

export default MockApiComponent;