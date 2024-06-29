'use client'

import Button from "@/components/common/button";
import Checkbox from "@/components/common/checkbox";
import Input from "@/components/common/input";
import Image from "next/image";
import { useState } from "react";

export default function Home() {

  const [state,setState] = useState(true)

  return (
    <>
      <div>init</div>
      <Button variant="text" color="red">
        test
      </Button>
      <Input placeholder="test"/>
      <Checkbox setIsChecked={(e:boolean)=>setState(e)} isChecked={state}/>
    </>
  );
}
