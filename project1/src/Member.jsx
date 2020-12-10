import React from "react";

export const Member = () => {
  return (
    <div className="member">
      <div class="card">
        <div class="card-body">
          <p className="memberNumber">
            Member Number{" "}
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              class="bi bi-info-circle-fill"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM8 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
              />
            </svg>
          </p>
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
          <p>
            Forgot your Member Number ? Call CUA on 1800 931 411 to Retrieve it
          </p>
          <div className="actionArea text-end">
            <button type="button" class="btn btn-default m-2 cancel">
              Cancel
            </button>
            <button type="button" class="btn btn-warning m-2 continue">
              <span className="continueText">Continue</span>
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                class="bi bi-arrow-right"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                className="right-arrow"
              >
                <path
                  fill-rule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                />
              </svg>
            </button>
          </div>

          <div className="bottom-text">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
