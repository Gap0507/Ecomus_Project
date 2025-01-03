import multer from 'multer';
import path  from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configure Multer with dynamic destination
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        let folder;
        if (req.route.path === '/create-category' || req.route.path.startsWith('/update-category')) {
            folder = path.join(__dirname, '../public/category');
        } else if (req.route.path === '/add-banner' || req.route.path.startsWith('/update-banner')) {
            folder = path.join(__dirname, '../public/banner');
        } else {
            return cb(new Error('Invalid route. Cannot determine upload folder.'));
        }

        cb(null, folder);
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    },
});

const upload = multer({ storage });

export default upload;
