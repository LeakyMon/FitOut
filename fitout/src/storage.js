import { Storage } from "@google-cloud/storage";
import fs from 'fs';
import ffmpeg from 'fluent-ffmpeg';


const storage = new Storage();

const rawImageBucketName = "raw-images";
const processedImageBucketName = "processed-images";

const localRawVideoPath = "./raw-videos";
const localProcessedVideoPath = "./processed-videos";

