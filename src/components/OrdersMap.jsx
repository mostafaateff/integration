import React from 'react'

export default function OrdersMap() {
  return (
    <>
      <div className="contianer">
        <div className="row p-3 border border-4">
          <div className=" col-3">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
              eligendi incidunt temporibus facere perspiciatis, qui saepe
              recusandae dolorum sapiente quam ducimus nobis at! Iusto ab,
              dolores laboriosam facilis culpa hic.
            </p>
          </div>
          <div className=" col-9">
            <div className='overflow-hidden'>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d161458.96358337457!2d31.487165312378934!3d30.00529577757057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2seg!4v1735571701502!5m2!1sen!2seg"
                width="1000"
                height="500"
                allowfullscreen
                loading="lazy"
                title="Responsive Google Map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

