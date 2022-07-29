import express from "express";
import {
    getFasilitas,
    getFasilitasById,
    saveFasilitas,
    updateFasilitas,
    deleteFasilitas
} from "../controllers/Fasilitascontroller.js";

const router = express.Router();

router.get('/fasilitas', getFasilitas);
router.get('/fasilitas/:idfasilitas', getFasilitasById);
router.post('/fasilitas', saveFasilitas);
router.patch('/fasilitas/:idfasilitas', updateFasilitas);
router.delete('/fasilitas/:idfasilitas', deleteFasilitas);

export default router;