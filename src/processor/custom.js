async function fetchAllSizes() {
    let response = await fetch(`${process.env.API_URL}/api/tyreadderapp/sizes/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
        throw new Error('Failed to fetch data')
    }

    return response.json();
};
async function fetchAllBrands() {
    let response = await fetch(`${process.env.API_URL}/api/tyreadderapp/brands/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
        throw new Error('Failed to fetch data')
    }

    return response.json();
};



export {fetchAllSizes, fetchAllBrands}