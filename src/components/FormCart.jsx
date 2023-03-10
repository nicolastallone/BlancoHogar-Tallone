import React from "react";

const FormCart = () => {
    
  const comprarProd = (e) => {
    e.preventDefault();
    <div class="alert alert-success" role="alert">
      Muchas Gracias por tu compra!
    </div>;
  };

  return (
    <form className="row g-3 needs-validation" onSubmit={comprarProd}>
    <div className="col-md-4">
      <label className="form-label">First name</label>
      <input type="text" className="form-control" id="validationCustom01" placeholder="nombre" required=""/>
      <div className="valid-feedback">
        Looks good!
      </div>
    </div>
    <div className="col-md-4">
      <label className="form-label">Last name</label>
      <input type="text" className="form-control" id="validationCustom02" placeholder="Otto" required=""/>
      <div className="valid-feedback">
        Looks good!
      </div>
    </div>
    <div className="col-md-4">
    </div>
    <div className="col-md-6">
      <label  className="form-label">City</label>
      <input type="text" className="form-control" id="validationCustom03" required=""/>
      <div className="invalid-feedback">
        Please provide a valid city.
      </div>
    </div>
    <div className="col-md-3">
      <label className="form-label">Phone</label>
      <input type="number" className="form-control" id="validationCustom02" placeholder="2222222" required=""/>
      <div className="valid-feedback">
        Looks good!
      </div>
    </div>
    <div className="col-12">
      <div className="form-check">
        <input className="form-check-input" type="checkbox" placeholder="" id="invalidCheck" required=""/>
        <label className="form-check-label">
          Agree to terms and conditions
        </label>
        <div className="invalid-feedback">
          You must agree before submitting.
        </div>
      </div>
    </div>
    <div className="col-12">
      <button className="btn btn-primary" type="submit">Submit form</button>
    </div>
  </form>
  );
};

export default FormCart;
