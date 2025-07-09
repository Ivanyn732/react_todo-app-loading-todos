import React from 'react';

type Props = {
  error: string;
};

export const Error: React.FC<Props> = ({ error }) => {
  return (
    <div
      data-cy="ErrorNotification"
      className={`notification is-danger is-light has-text-weight-normal ${!error ? 'hidden' : ''}`}
    >
      <button data-cy="HideErrorButton" type="button" className="delete" />
      {/* show only one message at a time */}
      <br />
      {error}
      {/* Unable to update a todo */}
    </div>
  );
};
