const baseUrl = `https://test.employee.tokoweb.xyz/api/`;
const token = sessionStorage.getItem("token");

const getLogintService = async (form) => {
  const dataUser = await fetch(baseUrl + "login", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(form),
  });
  return await dataUser.json();
};

const getProduct = async () => {
  const product = await fetch(baseUrl + "product", {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return await product.json();
};

const createProduct = async (form) => {
  const product = await fetch(baseUrl + "product/store", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(form),
  });
  return await product.json();
};

const getDetailProduct = async (id) => {
  const feature = await fetch(baseUrl + `product/show?product_id=${id}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return await feature.json();
};

const updateProduct = async (form) => {
  const product = await fetch(baseUrl + "product/update", {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(form),
  });
  return await product.json();
};

const deleteProduct = async (id) => {
  const product = await fetch(baseUrl + `product/${id}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  return product.json();
};

export {
  getLogintService,
  getProduct,
  createProduct,
  getDetailProduct,
  updateProduct,
  deleteProduct,
};
