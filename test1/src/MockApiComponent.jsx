import React, { useEffect, useState } from 'react';
import axios from 'axios';

/**
 * MockApiComponent
 *
 * A component that invokes a mock API and displays the response.
 */

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
      const response = await axios.get("https://bn4htph2o4.execute-api.ap-south-1.amazonaws.com/dev/authenticate");
      console.log(response.data);
      // Set the response in state
      setContent(response.data);
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

