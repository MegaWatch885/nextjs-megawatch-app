import { mongooseConnect } from "@/lib/mongoose";
import { Movie } from "@/models/Movie";


export default async function handle(req, res) {
    const { method } = req;

    // connect mongodb databse
    await mongooseConnect();

    //get movies data api
    if (method === "GET") {
        if (req.query?.id) {

            // fetch a single movie by id
            const movies = await Movie.findById(req.query.id);
            res.json(title);
        } else if (req.query?.titlecategory) {
            // ftexh movies by title category
            const titlecategory = await Movie.find({titlecategory : req.query.titlecategory})
            res.json(titlecategory.reverse()); // reverse for showing latest data
        } else if (req.query?.genre) {
            // ftech movies by genre
            const genre = await Movie.find({genre : req.query.genre})
            res.json(genre.reverse()); // reverse for showing latest data
        } else if (req.query?.category) {
            // ftech movies by category
            const category = await Movie.find({category : req.query.category})
            res.json(category.reverse()); // reverse for showing latest data
        } else if (req.query?.slug) {
            // ftech movies by slug (url of the website)
            const slug = await Movie.find({slug : req.query.slug})
            res.json(slug.reverse()); // reverse for showing latest data
        } else {
            // fetch all movies
            const movies = await Movie.find();
            res.json(movies.reverse()); // reverse for showing latest data
        }
        
    } else {
        res.status(405).json({message: "Method Not Allowed"})
    }
}