import React from 'react';
import CapitalResult from '../../../models/CapitalResult.interface';

type Props = {
  results: CapitalResult[];
};

const FindCapitalResults: React.FC<Props> = ({ results }) => {
  if (!results.length) return null;
  
  return (
    <table className="ui celled table">
      <thead>
        <tr>
          <th>country</th>
          <th>capital</th>
        </tr>
      </thead>
      <tbody>
        {results.map((result) => (
            <tr key={result.country}>
                <td data-label="country">{result.country}</td>
                <td data-label="city">{result.city}</td>
            </tr>
        ))}
      </tbody>
    </table>
  );
};

export default FindCapitalResults;
