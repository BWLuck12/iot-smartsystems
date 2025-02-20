import ProfileInput from "@/components/Inputs";
import Selects from "@/components/Selects";
import { ChangeEvent, useState } from "react";

// Step2.tsx
interface Step2Props {
  formData: any;
  handleInputChange: (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
}

const Step2 = ({ formData, handleInputChange }: Step2Props) => {
  // ย้าย handleProfileImageChange เข้าไปในคอมโพเนนต์เพื่อใช้ handleInputChange จาก props
  const handleProfileImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        handleInputChange({
          target: { name: "profile_image", value: reader.result as string },
        } as ChangeEvent<HTMLInputElement>);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col gap-5 mt-5">
      {/* Section: Upload Profile Image */}
      <div className="bg-white rounded-2xl shadow-xl p-5">
        <h4 className="mb-2 text-lg font-semibold text-left">
          อัพโหลดรูปโปรไฟล์
        </h4>
        <div className="flex flex-col items-center gap-4">
          {formData.profile_image ? (
            <img
              src={formData.profile_image}
              alt="Profile Preview"
              className="w-32 h-32 object-cover rounded-full border-2 border-gray-300"
            />
          ) : (
            <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center">
              <span className="text-gray-500">No Image</span>
            </div>
          )}
          <input
            type="file"
            accept="image/*"
            onChange={handleProfileImageChange}
            className="w-full"
          />
        </div>
      </div>

      {/* Section: ข้อมูลส่วนบุคคล */}
      <div className="bg-white rounded-2xl shadow-xl p-5">
        <h4 className="mb-2 text-lg font-semibold text-left">
          ข้อมูลส่วนบุคคล
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-5">
          <ProfileInput
            title="ID Card (รหัสบัตรประชาชน)"
            values={formData.id_card}
            onChanges={handleInputChange}
            names="id_card"
          />
          <ProfileInput
            title="Student ID (รหัสนักศึกษา)"
            values={formData.student_id}
            onChanges={handleInputChange}
            names="student_id"
          />
          <ProfileInput
            title="Email (อีเมล)"
            values={formData.email}
            onChanges={handleInputChange}
            names="email"
          />
          <Selects
            title="Position (ตำแหน่ง)"
            values={formData.position}
            onChanges={handleInputChange}
            names="position"
            options={["อาจารย์", "นักศึกษา"]}
          />
          <ProfileInput
            title="First Name (ชื่อ)"
            values={formData.first_name}
            onChanges={handleInputChange}
            names="first_name"
          />
          <ProfileInput
            title="Last Name (นามสกุล)"
            values={formData.last_name}
            onChanges={handleInputChange}
            names="last_name"
          />
          <ProfileInput
            title="Nickname (ชื่อเล่น)"
            values={formData.nick_name}
            onChanges={handleInputChange}
            names="nick_name"
          />
          <ProfileInput
            title="Date of birth (วันเดือนปีที่เกิด)"
            values={formData.date_of_birth}
            onChanges={handleInputChange}
            names="date_of_birth"
            type="date"
          />
          <ProfileInput
            title="LineID (ไอดีไลน์)"
            values={formData.line_id}
            onChanges={handleInputChange}
            names="line_id"
          />
          <ProfileInput
            title="Phone Number (เบอร์โทร)"
            values={formData.phone}
            onChanges={handleInputChange}
            names="phone"
          />
          <Selects
            values={formData.blood_group}
            onChanges={handleInputChange}
            names="blood_group"
            title="Blood Type (กรุ๊ปเลือด)"
            options={["A", "B", "AB", "O"]}
          />
        </div>
      </div>

      {/* Section: ข้อมูลส่วนผู้ปกครอง */}
      <div className="bg-white rounded-2xl shadow-xl p-5">
        <h4 className="mb-2 text-lg font-semibold text-left">
          ข้อมูลส่วนผู้ปกครอง
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-5">
          <ProfileInput
            title="Guardian First Name (ชื่อผู้ปกครอง)"
            values={formData.guardian_fname}
            onChanges={handleInputChange}
            names="guardian_fname"
          />
          <ProfileInput
            title="Guardian Last Name (นามสกุลผู้ปกครอง)"
            values={formData.guardian_lname}
            onChanges={handleInputChange}
            names="guardian_lname"
          />
          <ProfileInput
            title="Guardian Phone (เบอร์โทรผู้ปกครอง)"
            values={formData.guardian_phone}
            onChanges={handleInputChange}
            names="guardian_phone"
          />
        </div>
      </div>
    </div>
  );
};

export default Step2;