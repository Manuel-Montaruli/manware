import ProfilePicture from "@/components/Profile/ProfilePicture";
import { Separator } from "@/components/ui/separator"
import ProfileText from "@/components/Profile/ProfileText";

export default function Profile() {
    return (
        <div className="flex justify-start align-top gap-12">
            <ProfilePicture />
            <Separator orientation={"vertical"}/>
            <ProfileText />
        </div>
    )
}