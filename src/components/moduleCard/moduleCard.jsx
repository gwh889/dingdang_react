function ModuleCard() {
  return (
    <template>
      <div
        style={{
          color: "#036ed6",
          fontSize: "40px",
          margin: "56px 0 24px 0",
          fontWeight: "bold",
        }}
      >
        <slot name="title"> </slot>
      </div>
      <div>
        <slot name="content"></slot>
      </div>
    </template>
  );
}
export default ModuleCard;
