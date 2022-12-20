export const secondsToHms = (d) => {
    d = Number(d);
 let h = Math.floor(d / 3600);
 let m = Math.floor((d % 3600) / 60);
 let s = Math.floor((d % 3600) % 60);

 return (
   ("0" + h).slice(-2) +
   ":" +
   ("0" + m).slice(-2) +
   ":" +
   ("0" + s).slice(-2)
 );
}