import { FormControl } from "@mui/material";
import { styled } from "@mui/material/styles";
const CustomFormControl = styled(FormControl)({
	width: "100%",
	"& label.Mui-focused": {
		color: "var(--primary)",
	},
	"& .MuiInput-underline:after": {
		borderBottomColor: "var(--primary)",
	},
	"& .MuiOutlinedInput-root": {
		"&.Mui-focused fieldset": {
			borderColor: "var(--primary)",
		},
	},
});

export default CustomFormControl;
