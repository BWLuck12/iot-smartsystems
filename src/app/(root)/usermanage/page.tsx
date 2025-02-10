"use client";
import React, { useState } from 'react';

// กำหนด type สำหรับนักศึกษา (สำหรับ TypeScript)
type Student = {
  Student_ID: string;
  First_name: string;
  Last_name: string;
  Nick_name: string;
  Email: string;
  Password: string;
  Token_ID: string;
  Line_ID: string;
  Position: string;
  Telephone: string;
  Birthdate: string;
  Blood_group: string;
  Parent_Fname: string;
  Parent_Lname: string;
  Parent_Telephone: string;
  Profile_Image: string;
};

// ข้อมูลตัวอย่างนักศึกษา (ใช้เป็นค่าเริ่มต้น)
const initialStudentsData: Student[] = [
  {
    Student_ID: 'S001',
    First_name: 'บวรลักษณ์',
    Last_name: 'ศิลป์สกุลเจริญ',
    Email: '64200123@kmitl.ac.th',
    Nick_name: 'วอน',
    Password: '084กระหรี่นมโต',
    Token_ID: '',
    Line_ID: '',
    Position: '',
    Telephone: '',
    Birthdate: '2003-03-12',
    Blood_group: 'O',
    Parent_Fname: '',
    Parent_Lname: '',
    Parent_Telephone: '',
    Profile_Image: ''
  },
  {
    Student_ID: 'S002',
    First_name: 'ขวัญจิตา',
    Last_name: 'อำนวยสุข',
    Email: 'แม่ของคุณ@gmail.com',
    Nick_name: '',
    Password: 'password2',
    Token_ID: '',
    Line_ID: '',
    Position: '',
    Telephone: '',
    Birthdate: '2001-12-01',
    Blood_group: 'A',
    Parent_Fname: '',
    Parent_Lname: '',
    Parent_Telephone: '',
    Profile_Image: ''
  },
  {
    Student_ID: 'S003',
    First_name: 'สมศักดิ์',
    Last_name: 'รักประยุทธ',
    Email: 'ไอ้โต๊ส@gmail.com',
    Nick_name: '',
    Password: 'password3',
    Token_ID: '',
    Line_ID: '',
    Position: '',
    Telephone: '',
    Birthdate: '1950-10-03',
    Blood_group: 'B',
    Parent_Fname: '',
    Parent_Lname: '',
    Parent_Telephone: '',
    Profile_Image: ''
  },
];

export default function Page() {
  // เก็บข้อมูลนักศึกษาใน state เพื่อให้สามารถอัปเดตได้
  const [data, setData] = useState<Student[]>(initialStudentsData);
  const [search, setSearch] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [confirmModalOpen, setConfirmModalOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const [showPassword, setShowPassword] = useState(false);

  // กรองข้อมูลนักศึกษาตามข้อความค้นหา (ค้นหาจาก รหัส, ชื่อ, นามสกุล, หรือ อีเมล)
  const filteredStudents = data.filter((student) => {
    const query = search.toLowerCase();
    return (
      student.Student_ID.toLowerCase().includes(query) ||
      student.First_name.toLowerCase().includes(query) ||
      student.Last_name.toLowerCase().includes(query) ||
      student.Email.toLowerCase().includes(query)
    );
  });

  // เมื่อคลิกปุ่มแก้ไข ให้ตั้งค่า selectedStudent และเปิด modal
  const handleEdit = (student: Student) => {
    setSelectedStudent({ ...student }); // ทำสำเนาเพื่อให้แก้ไขได้โดยไม่กระทบข้อมูลต้นฉบับทันที
    setModalOpen(true);
  };

  // ฟังก์ชันสำหรับปิด modal
  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedStudent(null);
  };

  // ฟังก์ชันสำหรับยืนยันการเปลี่ยนแปลง
  const handleConfirm = () => {
    if (selectedStudent) {
      // อัปเดตข้อมูลใน state โดยเปลี่ยนแปลงเฉพาะรายการที่มี Student_ID ตรงกัน
      setData((prevData) =>
        prevData.map((student) =>
          student.Student_ID === selectedStudent.Student_ID ? selectedStudent : student
        )
      );
      setConfirmModalOpen(false);
      handleCloseModal();
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 md:p-8 lg:p-10 2xl:p-12">
      {/* ช่องค้นหาข้อมูลนักศึกษา */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="ค้นหานักศึกษา (รหัส, ชื่อ, นามสกุล, อีเมล)"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-2 sm:p-3 md:p-4 border border-gray-300 rounded"
        />
      </div>

      {/* ตารางแสดงข้อมูลนักศึกษา */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse bg-white">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2 border text-right">รหัสนักศึกษา</th>
              <th className="px-4 py-2 border text-left">ชื่อ</th>
              <th className="px-4 py-2 border text-left">นามสกุล</th>
              <th className="px-4 py-2 border text-left">อีเมล</th>
              <th className="px-4 py-2 border text-right">แก้ไข</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.length > 0 ? (
              filteredStudents.map((student) => (
                <tr key={student.Student_ID} className="hover:bg-gray-100">
                  <td className="px-4 py-2 border text-right">{student.Student_ID}</td>
                  <td className="px-4 py-2 border text-left">{student.First_name}</td>
                  <td className="px-4 py-2 border text-left">{student.Last_name}</td>
                  <td className="px-4 py-2 border text-left">{student.Email}</td>
                  <td className="px-4 py-2 border text-right">
                    <button
                      className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
                      onClick={() => handleEdit(student)}
                    >
                      แก้ไข
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="text-center p-4">
                  ไม่พบข้อมูลนักศึกษาที่ค้นหา
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Edit Modal สำหรับแก้ไขข้อมูลนักศึกษา */}
      {modalOpen && selectedStudent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="bg-white w-11/12 sm:w-11/12 md:w-3/4 lg:w-2/3 2xl:w-1/2
                       h-4/5 sm:h-4/5 md:h-3/4 lg:h-2/3 2xl:h-auto
                       p-6 sm:p-8 md:p-10 lg:p-12 rounded-lg relative overflow-auto">
            
            <div className="flex flex-col">
              {/* รูปโปรไฟล์ */}
              <div className="flex justify-center">
                <div className="w-32 h-32 rounded-full bg-gray-200 border-4 border-gray-500 flex items-center justify-center overflow-hidden">
                  {/* ตัวอย่างใช้ SVG แสดงไอคอนโปรไฟล์ */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-16 w-16 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5.121 17.804A4.992 4.992 0 0112 15c1.657 0 3.156.674 4.121 1.804M15 12a3 3 0 10-6 0 3 3 0 006 0z"
                    />
                  </svg>
                </div>
              </div>
              {/* เส้นกั้น */}
              <div className="flex justify-center my-4">
                <hr className="border-t-2 w-full sm:w-full md:w-full lg:w-full border-gray-300" />
              </div>
              {/* ฟอร์มแก้ไขข้อมูล */}
              <div className="space-y-4">
                <form className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">รหัสนักศึกษา</label>
                    <input
                      type="text"
                      value={selectedStudent.Student_ID}
                      onChange={(e) =>
                        setSelectedStudent({ ...selectedStudent, Student_ID: e.target.value })
                      }
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">ชื่อนักศึกษา</label>
                    <input
                      type="text"
                      value={selectedStudent.First_name}
                      onChange={(e) =>
                        setSelectedStudent({ ...selectedStudent, First_name: e.target.value })
                      }
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">นามสกุลนักศึกษา</label>
                    <input
                      type="text"
                      value={selectedStudent.Last_name}
                      onChange={(e) =>
                        setSelectedStudent({ ...selectedStudent, Last_name: e.target.value })
                      }
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">ชื่อเล่น</label>
                    <input
                      type="text"
                      value={selectedStudent.Nick_name}
                      onChange={(e) =>
                        setSelectedStudent({ ...selectedStudent, Nick_name: e.target.value })
                      }
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">ตำแหน่ง</label>
                    <select
                      value={selectedStudent.Position}
                      onChange={(e) =>
                        setSelectedStudent({ ...selectedStudent, Position: e.target.value })
                      }
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    >
                      <option value="อาจารย์">อาจารย์</option>
                      <option value="นักศึกษา">นักศึกษา</option>
                      <option value="บุคลากร">บุคลากร</option>
                      <option value="Your Mom">Your Mom</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">วันเดือนปีเกิด</label>
                    <input
                      type="date"
                      value={selectedStudent.Birthdate}
                      onChange={(e) =>
                        setSelectedStudent({ ...selectedStudent, Birthdate: e.target.value })
                      }
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">หมู่เลือด</label>
                    <select
                      value={selectedStudent.Blood_group}
                      onChange={(e) =>
                        setSelectedStudent({ ...selectedStudent, Blood_group: e.target.value })
                      }
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    >
                      <option value="O">O</option>
                      <option value="A">A</option>
                      <option value="B">B</option>
                      <option value="AB">AB</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">เบอร์โทร</label>
                    <input
                      type="text"
                      value={selectedStudent.Telephone}
                      onChange={(e) =>
                        setSelectedStudent({ ...selectedStudent, Telephone: e.target.value })
                      }
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    />
                  </div>
                </form>
                <div className="flex justify-center my-4">
                  <hr className="border-t-2 w-full border-gray-300" />
                </div>
                <form className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">อีเมล</label>
                    <input
                      type="email"
                      value={selectedStudent.Email}
                      onChange={(e) =>
                        setSelectedStudent({ ...selectedStudent, Email: e.target.value })
                      }
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">รหัสผ่าน</label>
                    <div className="flex items-center mt-1">
                      <input
                        type={showPassword ? "text" : "password"}
                        value={selectedStudent.Password}
                        onChange={(e) =>
                          setSelectedStudent({ ...selectedStudent, Password: e.target.value })
                        }
                        className="block w-full border border-gray-300 rounded-md shadow-sm p-2"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword((prev) => !prev)}
                        className="ml-2 text-gray-500"
                      >
                        {showPassword ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-5 h-5"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M3.98 8.223C2.884 9.348 2.05 10.63 1.5 12c1.274 4.057 5.065 7 9.542 7 1.241 0 2.421-.22 3.5-.618m3.519-1.158A9.969 9.969 0 0021 12c-1.15-3.682-4.214-6-8-6a9.966 9.966 0 00-3.518.667"
                            />
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-5 h-5"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">โทเคน Google</label>
                    <input
                      type="text"
                      value={selectedStudent.Token_ID}
                      onChange={(e) =>
                        setSelectedStudent({ ...selectedStudent, Token_ID: e.target.value })
                      }
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">ไอดีไลน์</label>
                    <input
                      type="text"
                      value={selectedStudent.Line_ID}
                      onChange={(e) =>
                        setSelectedStudent({ ...selectedStudent, Line_ID: e.target.value })
                      }
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    />
                  </div>
                </form>
                <div className="flex justify-center my-4">
                  <hr className="border-t-2 w-full border-gray-300" />
                </div>
                <form className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">ชื่อผู้ปกครอง</label>
                    <input
                      type="text"
                      value={selectedStudent.Parent_Fname}
                      onChange={(e) =>
                        setSelectedStudent({ ...selectedStudent, Parent_Fname: e.target.value })
                      }
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">นามสกุลผู้ปกครอง</label>
                    <input
                      type="text"
                      value={selectedStudent.Parent_Lname}
                      onChange={(e) =>
                        setSelectedStudent({ ...selectedStudent, Parent_Lname: e.target.value })
                      }
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">เบอร์โทรผู้ปกครอง</label>
                    <input
                      type="text"
                      value={selectedStudent.Parent_Telephone}
                      onChange={(e) =>
                        setSelectedStudent({ ...selectedStudent, Parent_Telephone: e.target.value })
                      }
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    />
                  </div>
                </form>
              </div>
               {/* ปุ่มยืนยันและยกเลิกอยู่ตรงล่างขวาของ pop-up */}
            <div className="space-x-4 mt-7 text-end">
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded sm:px-5 sm:py-2 md:px-6 md:py-3 lg:px-8 lg:py-3 2xl:px-10 2xl:py-3"
                  onClick={() => setConfirmModalOpen(true)}
                >
                  ยืนยัน
                </button>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded sm:px-5 sm:py-2 md:px-6 md:py-3 lg:px-8 lg:py-3 2xl:px-10 2xl:py-3"
                  onClick={handleCloseModal}
                >
                  ยกเลิก
                </button>
              </div>
            </div>
          </div>    
        </div>
      )}

      {/* Confirmation Modal สำหรับยืนยันการเปลี่ยนแปลง */}
      {confirmModalOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="bg-white w-80 sm:w-80 md:w-96 lg:w-[28rem] 2xl:w-[32rem] p-4 sm:p-6 md:p-8 rounded-lg">
            <h3 className="text-lg font-medium">ยืนยันการบันทึกข้อมูล</h3>
            <p className="mt-2">คุณต้องการบันทึกข้อมูลใช่หรือไม่?</p>
            <div className="mt-4 flex justify-end space-x-4">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded sm:px-5 sm:py-2 md:px-6 md:py-3 lg:px-8 lg:py-3 2xl:px-10 2xl:py-3"
                onClick={handleConfirm}
              >
                ตกลง
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded sm:px-5 sm:py-2 md:px-6 md:py-3 lg:px-8 lg:py-3 2xl:px-10 2xl:py-3"
                onClick={() => setConfirmModalOpen(false)}
              >
                ยกเลิก
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
