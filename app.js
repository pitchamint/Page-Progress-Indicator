//ตั้ง event ให้แสดงความคืบหน้าในการสกอเนื้อหาโดยเริ่มตรวจสอบการสกอใน window ของเราก่อน
const progressEl =document.querySelector('.progress') //เข้าถึงตัวความกว้างของ progress
window.onscroll = () => scrollProgress() //ถ้ามีการสกอเรียกใช้ฟังก์ชั่น

function scrollProgress(){
    //คำนวนหาความสูงของหน้าเว็บ อ้างอิงจากเนื่้อหาในหน้าเว็บ คำนวนออกมาเป็น % clienheight คือความสูงของหน้าต่างทั้งหมดไม่รวมตัวแสดง สกอ แต่ scrollheight คือรวมหมด
    const pageHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
    //หารกับ scroll top ก่อร
    const scrollTop = document.documentElement.scrollTop
    // const scroll = scrollTop/pageHeight
    //โดยค่าที่ได้จะเป็น 0-1 แล้วเอาไปคูณให้เป็น % 
    const scrollPercentage = (scrollTop/pageHeight)*100
    //เนื่องจากการเปลี่ยนแปลงอยู่ใน css เปลี่ยนสไตล์จาก visibility เป็น visible
    progressEl.style.visibility = "visible"
    //เข้าถึงความกว้างโดยให้ขยับตามการคำนวน % ที่เราตั้งตัวแปรไว้
    progressEl.style.width = scrollPercentage+"%" //focus จำเป็นต้องต่อเครื่องหมาย % string เผื่อให้สามารถแสดงผลได้
}
