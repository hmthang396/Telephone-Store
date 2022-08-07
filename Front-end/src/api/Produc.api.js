module.exports = {
    getAllElement: async() => {
        const fetchData = async() => {
            let optionFetch = {
                method: "GET",
                headers: {
                    "Content-type": "application/json;charset=utf-8",
                    Connection: "keep-alive",
                },
                mode: "cors",
            };
            const reponse = await fetch(
                "http://localhost:3000/json/DataProduct.json",
                optionFetch
            );
            if (!reponse.ok) {
                throw new Error("Could not fetch cart data!");
            }
            const data = await reponse.json();
            return data;
        };
        const productData = await fetchData();
        return productData;
    },
    getElementById: async(id) => {
        const fetchData = async() => {
            let optionFetch = {
                method: "GET",
                headers: {
                    "Content-type": "application/json;charset=utf-8",
                    Connection: "keep-alive",
                },
                mode: "cors",
            };
            const reponse = await fetch(
                "http://localhost:3000/json/DataProduct.json",
                optionFetch
            );
            if (!reponse.ok) {
                throw new Error("Could not fetch cart data!");
            }
            const data = await reponse.json();
            return data;
        };
        const productData = await fetchData();
        const product = productData.Data.filter((element) => {
            console.log(`${element.Product.id} - ${id}`);
            return element.Product.id == id;
        });
        return {
            Data: product,
            ErrorCode: 0,
            Message: "Thành công",
        };
    },
};