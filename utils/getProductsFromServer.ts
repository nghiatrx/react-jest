export default async function getProductsFromServer() {
  const res = await fetch(`https://msapi.template.net/ft-vn/site/landingpage?url=/editable/vector`)
  const data = await res.json()
  return data?.config?.productsRelated || []
}