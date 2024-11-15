import React from 'react'

type ParamsType = {
  clientId: number;
};

interface ClientIDProps {
  params: ParamsType;
}

const ClientID: React.FC<ClientIDProps> = ({ params }) => {
  return (
    <div className=''>
      <h2>Client Id </h2>
      <p>{params.clientId}</p>
    </div>
  );
};

export default ClientID;
