ระบบลาจัดการนี้พัฒนาโดยใช้เทคโนโลยี Angular และ Spring Boot ซึ่งช่วยให้ผู้จัดการและพนักงานสามารถจัดการการลาของพนักงานได้อย่างมีประสิทธิภาพ ตัวระบบสามารถ:

ขอลาพักลาหรือประเภทการลาอื่นๆ
ติดตามการขอลา
อนุมัติหรือไม่อนุมัติการลา
ดูสถิติการลา
ดูประวัติการลา
แสดงข้อมูลการลาทั้งหมด
ฟังก์ชันการส่งออกข้อมูลเป็นไฟล์ Excel
เทคโนโลยีที่ใช้
Frontend:
Angular 18
Angular Material
RxJS
NgRx (สำหรับการจัดการสถานะ)
Backend:
Spring Boot 3.3
Spring Security
Spring Data JPA
Java 17
Database:
PostgreSQL
ฟีเจอร์หลัก
หน้าแดชบอร์ด:

แสดงสถิติการลา เช่น จำนวนวันลาคงเหลือ, จำนวนคำขอลาที่รออนุมัติ, จำนวนวันลาที่ใช้ไปทั้งหมดในปีนี้
แสดงรายการขอลาล่าสุด
ปฏิทินแสดงวันลาในเดือนปัจจุบัน
หน้าขอลางาน:

ฟอร์มสำหรับเลือกประเภทการลา (ลาพักร้อน, ลาป่วย, ลากิจ)
ระบุวันที่เริ่มต้นและวันที่สิ้นสุดของการลา
ระบุเหตุผลการลา
ปุ่มส่งคำขอลา
หน้าประวัติการลา:

แสดงรายการประวัติการลาทั้งหมด
ฟิลเตอร์ตามประเภทการลาและสถานะ
หน้าสถิติการลา:

แสดงกราฟการลาตามประเภทการลา
ฟิลเตอร์ตามเดือนและปี
แสดงรายละเอียดการลาของพนักงาน
หน้ารายการขออนุมัติการลา (สำหรับผู้จัดการ):

รายการคำขอลาที่รออนุมัติ
ปุ่มอนุมัติหรือไม่อนุมัติ
ฟิลด์สำหรับเพิ่มความคิดเห็น
ฟีเจอร์เสริม:

รองรับการใช้งานบนหน้าจอขนาดต่างๆ
โหมดมืด
การส่งออกข้อมูลเป็นไฟล์ Excel
การติดตั้ง
ขั้นตอนการติดตั้ง Backend (Spring Boot)
ดาวน์โหลดโค้ดจาก repository
ตั้งค่า PostgreSQL และสร้างฐานข้อมูล
ตั้งค่าการเชื่อมต่อฐานข้อมูลในไฟล์ application.properties
รันโปรเจกต์ด้วยคำสั่ง:
bash
คัดลอก
mvn spring-boot:run
ขั้นตอนการติดตั้ง Frontend (Angular)
ดาวน์โหลดโค้ดจาก repository
ติดตั้ง dependencies ด้วยคำสั่ง:
bash
คัดลอก
npm install
รันโปรเจกต์ Angular ด้วยคำสั่ง:
bash
คัดลอก
ng serve
การใช้งาน
เข้าสู่ระบบ (ไม่มีระบบการล็อกอิน ระบบจะให้เลือกบทบาทระหว่างผู้จัดการและพนักงาน)
ผู้จัดการสามารถอนุมัติหรือไม่อนุมัติคำขอลา
พนักงานสามารถขอลาและตรวจสอบประวัติการลาได้
การส่งออกข้อมูล
สามารถส่งออกข้อมูลการลาเป็นไฟล์ Excel สำหรับสถิติการลาในระบบ

สถาปัตยกรรม
ระบบนี้ใช้ Frontend ที่พัฒนาโดย Angular ซึ่งเชื่อมต่อกับ Backend ที่พัฒนาโดย Spring Boot และฐานข้อมูล PostgreSQL สำหรับจัดเก็บข้อมูลการลา.

การพัฒนา
ระบบมีการออกแบบที่ยืดหยุ่นและรองรับการพัฒนาฟีเจอร์เพิ่มเติม
ฟังก์ชันใหม่ๆ เช่น การเพิ่มฟีเจอร์การแจ้งเตือน หรือการแสดงข้อมูลในรูปแบบอื่นๆ สามารถพัฒนาเพิ่มเติมได้ตามความต้องการ