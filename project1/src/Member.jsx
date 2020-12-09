import React from "react";

export const Member = () => {
  return (
    <div className="member">
      <p className="memberNumber">Member Number</p>
      <p>
        Please Note this is your Member Number and Not your Web Access Code
        (WAC).
      </p>
      <div class="mb-3">
        <input
          type="email"
          class="form-control memberInput"
          placeholder="Your Member Number"
        />
      </div>
      <p>Forgot your Member Number ? Call CUA on 1800 931 411 to Retrieve it</p>
      <div className="actionArea text-end">
        <button type="button" class="btn btn-default m-2 cancel">
          Cancel
        </button>
        <button type="button" class="btn btn-warning m-2 continue">
          Continue
        </button>
      </div>
    </div>
  );
};
