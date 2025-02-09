import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const MyOrders = () => {

  const navigate = useNavigate();
  const [myOrders, setMyOrders] = useState([]);

  const goToView = (invidP) => {
    navigate("/invoice-view",
      // { state: { invid: invidP } }
    );
  }

  return (
    <div className='text-center' style={{ height: 'calc(100vh - 115px)' }}>
      {
        !myOrders.length > 0 ?
          (
            <div className='row py-3 px-2'>
              {/* Item */}
              <div className="col-6">
                <div className="card shadow border" style={{ borderRadius: '10px', overflow: 'hidden', textDecoration: 'none', cursor: 'pointer' }} onClick={goToView}>
                  <div className="card-body d-flex flex-column justify-content-center align-items-center p-0 pt-2">
                    <img src="/assets/img/pdf_icon.png" style={{ width: '60px', height: '60px' }} alt="" />
                    <div className='text-muted mt-2'>Web Development</div>
                    <div className='btn btn-warning w-100 rounded-0' style={{ fontSize: '15px' }}>Open</div>
                  </div>
                </div>
              </div>
              {/* Item */}
            </div>
          ) : (
            <div style={{ display: 'grid', placeItems: 'center', height: '200px' }}>
              <Link to='/course' className='btn btn-warning' style={{ fontSize: '14px' }}>Purchase Now</Link>
            </div>
          )
      }
    </div>
  )
}

export default MyOrders
