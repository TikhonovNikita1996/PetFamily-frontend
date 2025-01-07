import { AppBar, Button } from "@mui/material";

export default function Header() {
    return (
        <AppBar position="static">
          <div className="flex flex-row items-center justify-between py-2 px-3  bg-red-400">
            <div className="flex flex-row gap-4 items-center justify-center">
              <span className="text-2xl pr-5">Pet Family</span>
              <span>asdasdasdly</span>
              <span>Pet asdasdasdily</span>
              <span>Pet Fasdasdasdily</span>
            </div>
            <Button color="inherit">Login</Button>
          </div>
        </AppBar>
    );
}
