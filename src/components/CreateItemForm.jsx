import React, { useState } from 'react';

export default function CreateItemForm({ createItem }) {
  return (
    <div className="col-6">
      <form onSubmit={createItem}>
        <input type="text" name="name" placeholder="Name" />
        <input type="text" name="description" placeholder="Description" />
        <input type="text" name="price" placeholder="Price" />
        <button type="submit">Create Item</button>
      </form>
    </div>
  );
}
