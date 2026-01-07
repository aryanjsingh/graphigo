"use client";

import { HeroParallax } from "@/components/ui/hero-parallax";
import { ParallaxScroll } from "@/components/ui/parallax-scroll";
import { Footer } from "@/components/footer";

export default function WorksPage() {
    return (
        <main className="min-h-screen bg-neutral-950">
            <HeroParallax products={products} />
            <div className="pb-20 pt-0 bg-neutral-950 relative w-full">
                <ParallaxScroll images={shortProducts} />
            </div>
            <Footer />
        </main>
    );
}

const shortProducts = [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDDzwsI6Odb_4_uUzP6gyVTLfaaGBsAc05HVu3-AK4eRkmn9uJp7Y-NliWHgbSnL2qwbrTOJ6lphgGQhHU6qs6vEZ8POMW7bKdLpFff2qLN2Id6O_RlGMVYoRZ0QnwK6M7U7PJbSmeDuBfkeAoTBHYePKOPzxWTdpLM7YuYfvjGfLLDLON8m-ONQRehQpYnsVtEpNqczcByd_BeqjJuTji7Gbbqyu_ZzOioeIpb-4qniQBykbbSSKmPuF09nP4a7lRx8bBiHLiiH6s",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCfS4oRiIAzBL5RQFDYO2NmbKVzveWvaN4bugUeeGoaxirBGjO_I4rI06UnbmuMxP1xEeSiX-f9Wl6J1-I06ab01u-wVz6NhTwWVK38j9vmZarSKP4K5l-aEx-Z3JmHHxIz--sQDh12_g-3bChUTKPUclq4ufvoap95hkRCeckzVw8EoyunTP3_ZdkCL9cimlXF9wpQIygsR3qvLwZRAUkD9tY6QVv-gcIzynqsK67-myIhnvFw41WPyq2e9LQQEOc0iy2JS35d2Ww",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuC4KJV2eX3u-n-lUKB8cmRcHBpYHhrtTsPxg6b1QGNHIYxvy1TIE4e8NfYjEPTy4pxr998tAaorOEdzL5vcZtSO-qvdG1Dr-QIIRH3q155b9uaolidQK5abwklClspa0w2E6FJb4eJPBluXX4IKpZzrNVbBatLk0s3pYI32ZZ99SQ3Q1gPQgs_yPoNF3N0bnWvE6x8Li11xVtJNN8nXaWi3EVdIQe5y_6nEVcFea33X5xexAEKbQ9yI72CsuNN6EWP169rk7WwWb8E",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuD_bXOo30hUUBpBSBnRjChaqh3vQH5GljqaAk_hQSPAagkqdgMUbHYiHTAOt-vdrpnzPKfWvP9kaByvN8vVcczjnc-sbZCLndAk5L5F3v_Zl3MHkbMH1Z38u1DuQcLIcRaeiqn2zOsEs12mrxyoxbFmjf_pFDLZM0HR4_ZH3yHHlDLGcpZzBtDnx-0w-a2aMMswmF6v2ewJSxkrUqcjbxehfZqr5FqyXJfnS3JOWgdIfziF3YmlYGgFCDFCEcz8M8tPBwVipUnCC5Y",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuASsYK9bLjVIdX-MLBcNK-5sBDQVokShgDJ3ZtPyeaKhkGn04zOBHiDyGnGEZlfPtIRaZMJBtCl9CzXJZMBlfUPI-wc3kcmVkiBC1QAX41fduRmNAJjf7_hTuj9omS6NPnRNKbTLjxpIou1nt1lQLbvgbhV9So0FD48D9ARGEkRWGApjTXerbBN_Tcy_D9Mf9n1qx24jcb47tCO_jqe1eiaVMaFHHyCE8jYtbBcQWvdKGHG5xaTmy-AAH54e4A_8fabrS12-dNAqrM",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCfzGJ7e7IN08qEVhHCZjlClQWXWIlyGAOB7G0G66834vQfNLhFMikPq4zxJ6S98DmRv1L0tUAKu4yz4u9n6K9dqwa_COZRGdUDYAHmORmxNfyHkiEr_9tEteK3Kjf_iHD7fuVCKceF2nzaKMD4a6pEsyW2HCSFijcYwFK-jMRemyiRCX7QibVrD3cGIktxGoUtwslLI-DbKj5BkjT5-jbz82Zzgpk1Jn75n2pkweCUDq3kj4mQRdyQd284Z8JGwqngBkLfynZpA8s",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCsrdnuy5uYPsSNUMcVXIn_FS_avINKM7GV2zGsqo1_f5oC21rk0Evo1UlXI6MzQgR1g6U8SL0ERWPeSG4DIeSLzZrwVapnXt1-ojVYgsCOy8eMWt6jkCwSfM7cTV_s2hNdv-Tv6SJY2pvdicWcDj5LaBwGNOCSuO-7_8E2LOVuZ7h22aRMxEsvnuixn2WwmoxE2Ey1jqnsFfqKgL24Yp_BNQriu_3vwT3e83A57XbguTbN_pa4DpOnCAzXW04seET9lba0oVFyGsA",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDu-l-nAUzJicaXM0CrdTbfodUDGk8RbOaKbLFs4uy_pc_AsuB5BixmDWbaudA55GuvLVmLqIShI9lYENEG4j-UQmpT8naA1OrF9AISCeZxIBfxplxYwm7xaUeVnK9e2t-7BvX3hwmTj9KTrLYuf7wNAUKO74fzyJsydCqEa2UuyG6U73KpMXOjBpzVN8Xr7-sYX27L-RkU-ni-3xSZphk1VU9-D0Heity1F0RvMBzM-E_fQNgEVXcZTJtlBuSueCeFKAsuMe2cC9c",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCfS4oRiIAzBL5RQFDYO2NmbKVzveWvaN4bugUeeGoaxirBGjO_I4rI06UnbmuMxP1xEeSiX-f9Wl6J1-I06ab01u-wVz6NhTwWVK38j9vmZarSKP4K5l-aEx-Z3JmHHxIz--sQDh12_g-3bChUTKPUclq4ufvoap95hkRCeckzVw8EoyunTP3_ZdkCL9cimlXF9wpQIygsR3qvLwZRAUkD9tY6QVv-gcIzynqsK67-myIhnvFw41WPyq2e9LQQEOc0iy2JS35d2Ww",
];

export const products = [
    {
        title: "Day in the life of a CEO",
        link: "#",
        thumbnail:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDDzwsI6Odb_4_uUzP6gyVTLfaaGBsAc05HVu3-AK4eRkmn9uJp7Y-NliWHgbSnL2qwbrTOJ6lphgGQhHU6qs6vEZ8POMW7bKdLpFff2qLN2Id6O_RlGMVYoRZ0QnwK6M7U7PJbSmeDuBfkeAoTBHYePKOPzxWTdpLM7YuYfvjGfLLDLON8m-ONQRehQpYnsVtEpNqczcByd_BeqjJuTji7Gbbqyu_ZzOioeIpb-4qniQBykbbSSKmPuF09nP4a7lRx8bBiHLiiH6s",
    },
    {
        title: "Summer Collection Teaser",
        link: "#",
        thumbnail:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCfS4oRiIAzBL5RQFDYO2NmbKVzveWvaN4bugUeeGoaxirBGjO_I4rI06UnbmuMxP1xEeSiX-f9Wl6J1-I06ab01u-wVz6NhTwWVK38j9vmZarSKP4K5l-aEx-Z3JmHHxIz--sQDh12_g-3bChUTKPUclq4ufvoap95hkRCeckzVw8EoyunTP3_ZdkCL9cimlXF9wpQIygsR3qvLwZRAUkD9tY6QVv-gcIzynqsK67-myIhnvFw41WPyq2e9LQQEOc0iy2JS35d2Ww",
    },
    {
        title: "The Future of AI is Here",
        link: "#",
        thumbnail:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuC4KJV2eX3u-n-lUKB8cmRcHBpYHhrtTsPxg6b1QGNHIYxvy1TIE4e8NfYjEPTy4pxr998tAaorOEdzL5vcZtSO-qvdG1Dr-QIIRH3q155b9uaolidQK5abwklClspa0w2E6FJb4eJPBluXX4IKpZzrNVbBatLk0s3pYI32ZZ99SQ3Q1gPQgs_yPoNF3N0bnWvE6x8Li11xVtJNN8nXaWi3EVdIQe5y_6nEVcFea33X5xexAEKbQ9yI72CsuNN6EWP169rk7WwWb8E",
    },
    {
        title: "Investment Tips 101",
        link: "#",
        thumbnail:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuD_bXOo30hUUBpBSBnRjChaqh3vQH5GljqaAk_hQSPAagkqdgMUbHYiHTAOt-vdrpnzPKfWvP9kaByvN8vVcczjnc-sbZCLndAk5L5F3v_Zl3MHkbMH1Z38u1DuQcLIcRaeiqn2zOsEs12mrxyoxbFmjf_pFDLZM0HR4_ZH3yHHlDLGcpZzBtDnx-0w-a2aMMswmF6v2ewJSxkrUqcjbxehfZqr5FqyXJfnS3JOWgdIfziF3YmlYGgFCDFCEcz8M8tPBwVipUnCC5Y",
    },
    {
        title: "The Future of Digital Marketing",
        link: "#",
        thumbnail:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuASsYK9bLjVIdX-MLBcNK-5sBDQVokShgDJ3ZtPyeaKhkGn04zOBHiDyGnGEZlfPtIRaZMJBtCl9CzXJZMBlfUPI-wc3kcmVkiBC1QAX41fduRmNAJjf7_hTuj9omS6NPnRNKbTLjxpIou1nt1lQLbvgbhV9So0FD48D9ARGEkRWGApjTXerbBN_Tcy_D9Mf9n1qx24jcb47tCO_jqe1eiaVMaFHHyCE8jYtbBcQWvdKGHG5xaTmy-AAH54e4A_8fabrS12-dNAqrM",
    },
    {
        title: "Scaling a Mountain",
        link: "#",
        thumbnail:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCfzGJ7e7IN08qEVhHCZjlClQWXWIlyGAOB7G0G66834vQfNLhFMikPq4zxJ6S98DmRv1L0tUAKu4yz4u9n6K9dqwa_COZRGdUDYAHmORmxNfyHkiEr_9tEteK3Kjf_iHD7fuVCKceF2nzaKMD4a6pEsyW2HCSFijcYwFK-jMRemyiRCX7QibVrD3cGIktxGoUtwslLI-DbKj5BkjT5-jbz82Zzgpk1Jn75n2pkweCUDq3kj4mQRdyQd284Z8JGwqngBkLfynZpA8s",
    },
    {
        title: "Company Culture",
        link: "#",
        thumbnail:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCsrdnuy5uYPsSNUMcVXIn_FS_avINKM7GV2zGsqo1_f5oC21rk0Evo1UlXI6MzQgR1g6U8SL0ERWPeSG4DIeSLzZrwVapnXt1-ojVYgsCOy8eMWt6jkCwSfM7cTV_s2hNdv-Tv6SJY2pvdicWcDj5LaBwGNOCSuO-7_8E2LOVuZ7h22aRMxEsvnuixn2WwmoxE2Ey1jqnsFfqKgL24Yp_BNQriu_3vwT3e83A57XbguTbN_pa4DpOnCAzXW04seET9lba0oVFyGsA",
    },
    {
        title: "Retro Gaming Tech Review",
        link: "#",
        thumbnail:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDu-l-nAUzJicaXM0CrdTbfodUDGk8RbOaKbLFs4uy_pc_AsuB5BixmDWbaudA55GuvLVmLqIShI9lYENEG4j-UQmpT8naA1OrF9AISCeZxIBfxplxYwm7xaUeVnK9e2t-7BvX3hwmTj9KTrLYuf7wNAUKO74fzyJsydCqEa2UuyG6U73KpMXOjBpzVN8Xr7-sYX27L-RkU-ni-3xSZphk1VU9-D0Heity1F0RvMBzM-E_fQNgEVXcZTJtlBuSueCeFKAsuMe2cC9c",
    },
    {
        title: "Fashion Editorial",
        link: "#",
        thumbnail:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCfS4oRiIAzBL5RQFDYO2NmbKVzveWvaN4bugUeeGoaxirBGjO_I4rI06UnbmuMxP1xEeSiX-f9Wl6J1-I06ab01u-wVz6NhTwWVK38j9vmZarSKP4K5l-aEx-Z3JmHHxIz--sQDh12_g-3bChUTKPUclq4ufvoap95hkRCeckzVw8EoyunTP3_ZdkCL9cimlXF9wpQIygsR3qvLwZRAUkD9tY6QVv-gcIzynqsK67-myIhnvFw41WPyq2e9LQQEOc0iy2JS35d2Ww",
    },
    {
        title: "Tech Gadget Review",
        link: "#",
        thumbnail:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuC4KJV2eX3u-n-lUKB8cmRcHBpYHhrtTsPxg6b1QGNHIYxvy1TIE4e8NfYjEPTy4pxr998tAaorOEdzL5vcZtSO-qvdG1Dr-QIIRH3q155b9uaolidQK5abwklClspa0w2E6FJb4eJPBluXX4IKpZzrNVbBatLk0s3pYI32ZZ99SQ3Q1gPQgs_yPoNF3N0bnWvE6x8Li11xVtJNN8nXaWi3EVdIQe5y_6nEVcFea33X5xexAEKbQ9yI72CsuNN6EWP169rk7WwWb8E",
    },
    {
        title: "Investment Strategies",
        link: "#",
        thumbnail:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuD_bXOo30hUUBpBSBnRjChaqh3vQH5GljqaAk_hQSPAagkqdgMUbHYiHTAOt-vdrpnzPKfWvP9kaByvN8vVcczjnc-sbZCLndAk5L5F3v_Zl3MHkbMH1Z38u1DuQcLIcRaeiqn2zOsEs12mrxyoxbFmjf_pFDLZM0HR4_ZH3yHHlDLGcpZzBtDnx-0w-a2aMMswmF6v2ewJSxkrUqcjbxehfZqr5FqyXJfnS3JOWgdIfziF3YmlYGgFCDFCEcz8M8tPBwVipUnCC5Y",
    },
    {
        title: "Lifestyle Vlog",
        link: "#",
        thumbnail:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDDzwsI6Odb_4_uUzP6gyVTLfaaGBsAc05HVu3-AK4eRkmn9uJp7Y-NliWHgbSnL2qwbrTOJ6lphgGQhHU6qs6vEZ8POMW7bKdLpFff2qLN2Id6O_RlGMVYoRZ0QnwK6M7U7PJbSmeDuBfkeAoTBHYePKOPzxWTdpLM7YuYfvjGfLLDLON8m-ONQRehQpYnsVtEpNqczcByd_BeqjJuTji7Gbbqyu_ZzOioeIpb-4qniQBykbbSSKmPuF09nP4a7lRx8bBiHLiiH6s",
    },
    {
        title: "Cinematic Travel",
        link: "#",
        thumbnail:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCfzGJ7e7IN08qEVhHCZjlClQWXWIlyGAOB7G0G66834vQfNLhFMikPq4zxJ6S98DmRv1L0tUAKu4yz4u9n6K9dqwa_COZRGdUDYAHmORmxNfyHkiEr_9tEteK3Kjf_iHD7fuVCKceF2nzaKMD4a6pEsyW2HCSFijcYwFK-jMRemyiRCX7QibVrD3cGIktxGoUtwslLI-DbKj5BkjT5-jbz82Zzgpk1Jn75n2pkweCUDq3kj4mQRdyQd284Z8JGwqngBkLfynZpA8s",
    },
    {
        title: "Corporate Documentary",
        link: "#",
        thumbnail:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCsrdnuy5uYPsSNUMcVXIn_FS_avINKM7GV2zGsqo1_f5oC21rk0Evo1UlXI6MzQgR1g6U8SL0ERWPeSG4DIeSLzZrwVapnXt1-ojVYgsCOy8eMWt6jkCwSfM7cTV_s2hNdv-Tv6SJY2pvdicWcDj5LaBwGNOCSuO-7_8E2LOVuZ7h22aRMxEsvnuixn2WwmoxE2Ey1jqnsFfqKgL24Yp_BNQriu_3vwT3e83A57XbguTbN_pa4DpOnCAzXW04seET9lba0oVFyGsA",
    },
    {
        title: "Gaming Review",
        link: "#",
        thumbnail:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDu-l-nAUzJicaXM0CrdTbfodUDGk8RbOaKbLFs4uy_pc_AsuB5BixmDWbaudA55GuvLVmLqIShI9lYENEG4j-UQmpT8naA1OrF9AISCeZxIBfxplxYwm7xaUeVnK9e2t-7BvX3hwmTj9KTrLYuf7wNAUKO74fzyJsydCqEa2UuyG6U73KpMXOjBpzVN8Xr7-sYX27L-RkU-ni-3xSZphk1VU9-D0Heity1F0RvMBzM-E_fQNgEVXcZTJtlBuSueCeFKAsuMe2cC9c",
    },
];
