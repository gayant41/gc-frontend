import axios from 'axios';
export default function AdminProductPage() {

    getProducts()


    return (
        <>
            <h3>Admin Product Page</h3>
        </>
    )
}

async function getProducts() {
    const response = await axios.get('http://localhost:3000/api/products')
    console.log(response.data)
}
