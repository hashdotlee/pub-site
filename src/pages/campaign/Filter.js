import React from "react";
import Select from "react-select";
import { useForm, Controller } from "react-hook-form";
import {Input, Col, Row, FormGroup, Label, Button, ButtonGroup, ButtonDropdown} from 'reactstrap';

const CampaignFilter = () => {
  const { errors, register, control, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data)
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormGroup>
        <Input innerRef={register({required:true})} placeholder="Tên chiến dịch" name="timkiem" type="text"/>
      {errors.timkiem && <span>Loi roi em oi</span>}
      </FormGroup>
      <FormGroup>
        <Label className="mr-4">Trạng thái</Label>
        <ButtonGroup>
          <Button name="moi" innerRef={register} value="true">Mới</Button>
          <Button>Chờ duyệt</Button>
          <Button>Đã duyệt</Button>
          <Button>Khóa</Button>
          </ButtonGroup>
      </FormGroup>
      <FormGroup>
        <Label for="industry">Ngành hàng</Label>
        <Controller
          name="industry"
          control={control}
          options={[
            { value: "e-commerce", label: "Thương mại điện tử" },
            { value: "travel-leisure", label: "Du lịch & Giải trí" },
            { value: "finacial-services", label: "Dịch vụ tài chính" },
            { value: "online-services", label: "Dịch vụ trực tuyến" },
            { value: "telecommunication", label: "Viễn thông" },
            { value: "education", label: "Giáo dục" },
            { value: "beauty", label: "Làm đẹp" },
            { value: "mobile", label: "Di động" },
            { value: "entertainment", label: "Giải trí" },
            { value: "real-estate", label: "Bất động sản" },
            { value: "game", label: "Game" },
          ]}
          as={Select}
        />
      </FormGroup>
      <FormGroup>
        <Label for="type">Loại</Label>
      <Controller
        name="type"
        control={control}
        defaultValue={{value:"all",label:"Tất cả" }}
        options={[
          {value:"all",label:"Tất cả" },
          {value:"CPA",label:"CPA" },
          {value:"CPL",label:"CPL" },
          {value:"CPS",label:"CPS"},
          {value:"CPI",label:"CPI"},
          {value:"D2C",label:"D2C"},
          {value:"CPQL",label:"CPQL"},
          {value:"CPR",label:"CPR"},
          {value:"Hỗn hợp",label:"Hỗn hợp"},
        ]}
    
        as={Select}
      />
      </FormGroup>
      <FormGroup>
        <Label for="auto">Duyệt tự động</Label>
      <Controller
        name="auto"
        control={control}
        defaultValue={{value:"false",label:"Không" }}
        options={[
          {value:"true",label:"Có" },
          {value:"false",label:"Không" },
        ]}
    
        as={Select}
      />
      </FormGroup>
      <FormGroup>
        <Label for="geo">
          Quốc gia
        </Label>
      <Controller
        name="geo"
        control={control}
        options={[
          { value: "vietnam", label: "Việt Nam" },
        ]}
        as={Select}
      />
      </FormGroup>
      <FormGroup>
        <Label for="datafeed">Datafeed</Label>
      <Controller
        name="datafeed"
        control={control}
        defaultValue={{value:"false",label:"Không" }}
        options={[
          {value:"true",label:"Có" },
          {value:"false",label:"Không" },
        ]}
    
        as={Select}
      />
      </FormGroup>
      <Button type="submit" block="true">Tìm kiếm</Button>
    </form>
  );
};
export default CampaignFilter;