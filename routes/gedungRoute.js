import express from "express";
import {
    getGedung,
    getGedungById,
    saveGedung,
    updateGedung,
    deleteGedung
} from "../controllers/gedungController.js";

const router = express.Router();

router.get('/gedung', getGedung);
router.get('/gedung/:idgedung', getGedungById);
router.post('/gedung', saveGedung);
router.patch('/gedung/:idgedung', updateGedung);
router.delete('/gedung/:idgedung', deleteGedung);

export default router;