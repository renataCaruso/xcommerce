import React from "react";
import * as Tabs from "@radix-ui/react-tabs";
import { styled } from "@stitches/react";
import { mauve, blackA } from "@radix-ui/colors";
import ModalRadix from "./ModalRadix";
import TabTodos from "../../Abas/AbaTodos";
import AbaFavoritos from "../../Abas/AbaFavoritos";

const AbaButton = () => (
  <div className="LineButtons">
    <ModalRadix />
    <TabsRoot defaultValue="tab1">
      <TabsList aria-label="Produtos">
        <TabsTrigger value="tab1">
          <Button2 size="large">Todos</Button2>
        </TabsTrigger>
        <TabsTrigger value="tab2">
          <Button2 size="large">Favoritos</Button2>
        </TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <Fieldset>
          <TabTodos />
        </Fieldset>
      </TabsContent>
      <TabsContent value="tab2">
        <AbaFavoritos />
      </TabsContent>
    </TabsRoot>
  </div>
);

const TabsRoot = styled(Tabs.Root, {
  display: "flex",
  flexDirection: "center",
  width: 800,
  boxShadow: `10 2px 10px ${blackA.blackA4}`,
});

const TabsList = styled(Tabs.List, {
  flexShrink: 0,
  display: "flex",
});

const TabsTrigger = styled(Tabs.Trigger, {
  all: "unset",
  fontFamily: "inherit",
  backgroundColor: "white",
  padding: "0 20px",
  height: 45,
  flex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: 15,
  lineHeight: 1,
  color: mauve.mauve11,
  userSelect: "none",
});

const Button2 = styled("button2", {
  all: "unset",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 4,
  padding: "0 15px",
  fontSize: 15,
  lineHeight: 1,
  fontWeight: 500,
  height: 35,
  position: "relative",
  left: "88px",
  bottom: "120px",
  backgroundColor: "#D32811",
  color: "#ffff",
  "&:hover": { backgroundColor: "#d25e4f" },
  "&:focus": { backgroundColor: "#d25e4f" },
});

const TabsContent = styled(Tabs.Content, {
  flexGrow: 1,
  padding: 10,
  backgroundColor: "white",
  borderBottomLeftRadius: 6,
  borderBottomRightRadius: 6,
  outline: "none",
  position: "relative",
  left: 350,
});

const Fieldset = styled("fieldset", {
  all: "unset",
  marginBottom: 15,
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
});

export default AbaButton;
