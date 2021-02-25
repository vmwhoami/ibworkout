import React, { useState, useEffect } from 'react';
import users from "../users";

const Testimonials = () => {
  return (
    <div>
      {users.map(user => {
        const { id, image, comment, name } = user
        return (
          <h1>{name}</h1>
        )
      })
      }
    </div>

  )
}
export default Testimonials;
