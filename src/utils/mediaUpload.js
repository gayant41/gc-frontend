import { createClient } from "@supabase/supabase-js";

const key = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFqbG56aGVvb2Nhb3d5ZmdkYWJ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTcwNzI2MjIsImV4cCI6MjA3MjY0ODYyMn0.C3d3oQq-5a9P2lc9x1XsXLMOJfp1RyZ9FzvRYN06nzg`;

const url = `https://qjlnzheoocaowyfgdabt.supabase.co`;
const supabase = createClient(url, key);
export default async function uploadMediaToSupabase(file) {
    return new Promise((resolve, reject) => {
        if (file === null) {
            reject("file not added");
        }
        let fileName = file.name;
        const extention = fileName.split('.')[fileName.split('.').length - 1];


        const timestamp = new Date().getTime();
        fileName = timestamp + '.' + extention;

        supabase.storage.from('images').upload(fileName, file, { cacheControl: '3600', upsert: false, }).then((res) => {
            const publicUrl = supabase.storage.from('images').getPublicUrl(fileName).data.publicUrl;
            resolve(publicUrl);

        }).catch((err) => {
            reject(err);
        })
    })
}