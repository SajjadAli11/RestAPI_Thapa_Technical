const Product = require('../model/product');


const getAllProducts = async (req,res)=>{

    // smart searching
    const {company,name,feature,sort,select} = req.query;
    const queryObject = {};

    if (company){
        queryObject.company = company;}
    
    if (feature){
        queryObject.feature = feature;}

    if (name){
        queryObject.name = {$regex: name, $options: "i"};}

    let apiData = Product.find(queryObject);
    // http://localhost:8080/api/v1/products/?company=apple1&sort=_id for sorting functionality
    if (sort){
            let sortFix = sort.replaceAll(","," "); //fail to treat multiple scenario of select hence 
            apiData = apiData.sort(sortFix);
        }
    
        if (select){
            let selectFix = select.replaceAll(","," ");
            apiData = apiData.select(selectFix);
        }

        let page = Number(req.query.page) || 1;
        let limit = Number(req.query.limit) || 3;
        let skip = (page-1)*limit;

        // http://localhost:8080/api/v1/products/?page=3&limit=2
        apiData = apiData.skip(skip).limit(limit);

    const myData = await apiData;

    // get via url input http://localhost:8080/api/v1/products/?company=apple3
    // http://localhost:8080/api/v1/products/?company=apple3&name=iphone3
    // const myData = await Product.find(req.query).sort("-name"); // negative for descending and positive for ascending    
    
    // get company specific
    //const myData = await Product.find({"company":"apple1"});
    // get all
    //const myData = await Product.find({});
    // searhc specific product name
    //const myData = await Product.find({"name":"iphone1"});
    // general response
    //res.send({"message":"I am the list of products"})
    res.send({myData, nbHits: myData.length});
}

const getAllProductsTesting = (req,res)=>{
    res.send({"message":"I am the list of products testing"})
}

module.exports = {getAllProducts, getAllProductsTesting}