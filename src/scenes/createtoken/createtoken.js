import React, { useState } from 'react';

function TokenForm() {
  const [tokenData, setTokenData] = useState({
    type: '',
    name: '',
    symbol: '',
    decimals: '',
    totalSupply: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    // send tokenData to server to create the token
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setTokenData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Token Type:
        <input
          type="text"
          name="type"
          value={tokenData.type}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={tokenData.name}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Symbol:
        <input
          type="text"
          name="symbol"
          value={tokenData.symbol}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Decimals:
        <input
          type="number"
          name="decimals"
          value={tokenData.decimals}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Total Supply:
        <input
          type="number"
          name="totalSupply"
          value={tokenData.totalSupply}
          onChange={handleInputChange}
        />
      </label>
      <button type="submit">Create Token</button>
    </form>
  );
}

export default TokenForm;
