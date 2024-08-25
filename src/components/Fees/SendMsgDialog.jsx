/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { SendIcon } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Textarea } from "../ui/textarea";
import axios from "axios";

function SendMsgDialog({ WhatAppNumber }) {
  const { toast } = useToast();
  const [message, setMessage] = useState("");
  const [buttonDisable, setButtonDisable] = useState(false);

  async function sendMsg(ev) {
    ev.preventDefault();

    try {
      await axios
        .post("/message/sendMessage", {
          WhatAppNumber: WhatAppNumber,
          message: message,
        })
        .then((res) => {
          if (res.status === 200) {
            toast({
              title: "Message has sent successfully.",
            });
          }
        });
    } catch (error) {
      if (error.response.status === 403) {
        toast({
          variant: "destructive",
          title: "There is some problem on server.",
        });
      }
      if (error.response.status === 400)
        toast({
          variant: "destructive",
          title: "There is some problem on server.",
        });
    }
  }

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <button
            disabled={buttonDisable}
            size="sm"
            className={`bg-blue-500 cursor-pointer text-white text-xs h-10 rounded-md px-2 hover:bg-blue-500/90 hover:ring-2 hover:ring-blue-700 flex items-center ${
              buttonDisable ? "hover:cursor-not-allowed" : ""
            }`}
          >
            <FaWhatsapp size={14} />
            <div className="ml-1">Send Message</div>
          </button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>
              <span>Send Message</span>
            </DialogTitle>
            <DialogDescription>
              Write a message to send in on a WhatsApp
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={sendMsg}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-start gap-4">
                <Label htmlFor="name" className="text-right">
                  Message:
                </Label>
                <Textarea
                  required
                  id="message"
                  //   type="text"
                  className="col-span-3 h-28"
                  onChange={(ev) => setMessage(ev.target.value)}
                />
              </div>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="secondary">Close</Button>
              </DialogClose>
              <DialogClose asChild>
                <Button type="submit" className="hover:bg-red-500">
                  <SendIcon size={15} className="mr-2" />
                  Send
                </Button>
              </DialogClose>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default SendMsgDialog;
