import ProfilePicture from "@/components/Profile/ProfilePicture";
import { Separator } from "@/components/ui/separator"
import ProfileText from "@/components/Profile/ProfileText";

export default function Profile() {
    return (
        <div className="py-40 flex justify-start align-top gap-10">
            <ProfilePicture />
            <Separator orientation={"vertical"}/>
            <ProfileText />
        </div>
    )
}