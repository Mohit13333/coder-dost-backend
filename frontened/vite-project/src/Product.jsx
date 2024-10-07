import './Product.css';

const Product = ({_id,title,thumbnail,price,discountPercentage,rating,handleClick,brand,category,description}) => {


  return (
    <>
      <div className="container mt-5 ">
        <div className="row ">
          <div className="col-md-3 ">
            <div className="card">
              <div className="image-container ">
                <div className="first">
                  <div className="flex justify-content-between align-items-center">
                    <span className="discount">-{discountPercentage}%</span>
                    <span className="wishlist">
                    <i className="flex justify-center items-center  text-black fa fa-trash" onClick={()=>handleClick(_id)}></i>
                      {/* <p className="flex justify-center items-center" onClick={()=>handleClick(_id)}>&#9829;</p> */}
                    </span>
                  </div>
                </div>
                <img
                  src={thumbnail}
                  className="img-fluid rounded thumbnail-image"
                  alt={title}
                />
              </div>
              <div className="product-detail-container p-2">
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="dress-name">{title}</h5>
                  <p className="text-sm text-pretty text-gray-600">{description}</p>
                  <div className="d-flex flex-column mb-2">
                    <span className="new-price">$ {Math.round(price-discountPercentage*price/100)}</span>
                    <small className="old-price flex text-right">$ {price}</small>
                  </div>
                </div>
                <div className='flex justify-between'>
                  <div>
                  <p className='text-black text-xl'>Category</p>
                <span className="brand text-gray-500 text-sm"> {category}</span>
                </div>
                <div>
                  <p className='text-black text-xl'>Brand</p>
                <span className="brand text-gray-500 text-sm"> {brand}</span>
                </div>
                </div>
                <div className="flex justify-between items-center pt-1">
                  <div>
                    <span className="rating-number"><span className="text-red-700">&#9733;</span>{rating}</span>
                  </div>
                  <span className="buy">BUY +</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;