import React from 'react';

import Card from '../../components/Card/Card';
import Pagination from '../../components/Pagination/PaginationRounded';
import './Dashboard.css';

export default function Dashboard() {
  return (
    <div className="dashboard">
      <h1>Welcome to the Dashboard!</h1>
      <h2 className="title2">Subscribers' data:</h2>
      <Card />
      <Pagination />
    </div>
  );
}
