const now = new Date();
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const dayName = days[now.getDay()];
const monthName = months[now.getMonth()];
const day = now.getDate().toString().padStart(2, '0');
const year = now.getFullYear();
const hours = now.getHours().toString().padStart(2, '0');
const minutes = now.getMinutes().toString().padStart(2, '0');
const seconds = now.getSeconds().toString().padStart(2, '0');

const CurrentDate = ` ${day} ${monthName} ${year}`;
const CurrentTime = `${hours}:${minutes}:${seconds}`;
export {CurrentDate,CurrentTime}