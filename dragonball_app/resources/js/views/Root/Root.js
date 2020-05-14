import React, {Fragment} from 'react';
import Button from "@/components/atoms/Button";
import Global_Style from "@/theme/Global_Style";

const Root = () => (
    <>
        <Global_Style/>
        <Button>Rozwiąż</Button>
        <Button secondary>Założ</Button>
    </>
);

export default Root;
