import type { AboutData } from "@/data/about";
import type { ExperienceItem } from "@/data/experience";
import type { Project } from "@/data/projects";
import type { StackItem } from "@/data/stack";
import { personalData } from "@/data/personal";
import type { PersonalContent } from "@/data/personal";
import type { SiteContent } from "./en";

const personal: PersonalContent = {
  role: "Lập trình viên Frontend",
  status: "Sẵn sàng cho cơ hội mới",
  availabilityNote: "Sẵn sàng cho các cơ hội Lập trình viên Frontend",
  bio: "Tôi là Lập trình viên Frontend đam mê xây dựng các ứng dụng web hiện đại, thân thiện với người dùng và hiển thị tốt trên mọi thiết bị bằng React, Next.js và TypeScript.",
  location: "TP. Hồ Chí Minh, Việt Nam",
};

const about: AboutData = {
  intro: [
    [
      { text: "Xin chào, tôi là " },
      { text: personalData.name, bold: true },
      {
        text: ", một Lập trình viên Frontend đam mê xây dựng các ứng dụng web hiện đại, thân thiện và dễ sử dụng. Tôi thích biến ý tưởng và thiết kế thành những trải nghiệm số thực tế bằng các công nghệ frontend hiện đại.",
      },
    ],
    [
      {
        text: "Tôi có kinh nghiệm làm việc với ReactJS, TypeScript và hệ sinh thái frontend hiện đại thông qua các dự án thực tế và thời gian làm việc tại FPT Software. Các dự án của tôi bao gồm ",
      },
      { text: "FengDesk AI", bold: true },
      {
        text: ", nền tảng gợi ý cây phong thủy và thương mại điện tử ứng dụng AI, cùng ",
      },
      { text: "Rescue AID", bold: true },
      {
        text: ", nền tảng ứng phó thiên tai với bản đồ tương tác và quy trình điều phối khẩn cấp.",
      },
    ],
    [
      {
        text: "Tôi coi trọng mã nguồn sạch, các component có thể tái sử dụng và việc học hỏi liên tục. Tôi luôn khám phá công nghệ mới và nâng cao kỹ năng để xây dựng sản phẩm tốt hơn, mang lại trải nghiệm có ý nghĩa cho người dùng.",
      },
    ],
  ],
  highlights: [
    { label: "Dự án nổi bật", value: "02+" },
    { label: "Trọng tâm chính", value: "Frontend" },
    { label: "Phát triển", value: "React & React Native" },
    { label: "Sở thích", value: "AI & Web/Mobile" },
  ],
  focusHeading: "Tôi làm gì",
  pillars: [
    {
      icon: "code",
      title: "Phát triển Frontend",
      description:
        "Xây dựng ứng dụng web responsive, dễ tiếp cận và dễ bảo trì bằng React, Next.js và TypeScript.",
    },
    {
      icon: "layers",
      title: "Triển khai giao diện",
      description:
        "Chuyển thiết kế Figma thành giao diện pixel-perfect với component tái sử dụng và hệ thống thiết kế nhất quán.",
    },
    {
      icon: "database",
      title: "API & Quản lý state",
      description:
        "Tích hợp API RESTful và quản lý dữ liệu ứng dụng với Redux Toolkit và TanStack Query.",
    },
    {
      icon: "devices",
      title: "Trải nghiệm web tương tác",
      description:
        "Phát triển trải nghiệm người dùng hấp dẫn thông qua bản đồ tương tác, trực quan hóa 3D, hoạt ảnh và công nghệ web hiện đại.",
    },
  ],
  principles: [
    "Mã sạch & dễ bảo trì",
    "Component tái sử dụng",
    "Thiết kế responsive",
    "Tối ưu hiệu năng",
    "Giải quyết vấn đề",
    "Học hỏi liên tục",
  ],
};

const experience: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "Kỹ sư Phần mềm",
    company: "FPT Software",
    period: "01/2025 - 04/2025",
    type: "Thực tập",
    description:
      "Phát triển giao diện người dùng responsive từ thiết kế Figma bằng ReactJS và TypeScript. Hoàn thành các nhiệm vụ UI/UX được giao, chuyển wireframe và prototype tương tác thành component pixel-perfect, đồng thời phối hợp với mentor trong môi trường Agile/Scrum. Tham gia review code và áp dụng phản hồi để nâng cao chất lượng và khả năng bảo trì của mã nguồn.",
    skills: [
      "ReactJS",
      "TypeScript",
      "Figma",
      "Git",
      "UI/UX",
      "Agile/Scrum",
    ],
  },
];

const stack: StackItem[] = [
  {
    id: "react",
    name: "ReactJS",
    category: "Phát triển Frontend",
    icon: "react",
    url: "https://react.dev/",
  },
  {
    id: "nextjs",
    name: "Next.js",
    category: "Framework React",
    icon: "nextjs",
    url: "https://nextjs.org/",
  },
  {
    id: "typescript",
    name: "TypeScript",
    category: "Ngôn ngữ lập trình",
    icon: "typescript",
    url: "https://www.typescriptlang.org/",
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    category: "Framework CSS",
    icon: "tailwind",
    url: "https://tailwindcss.com/",
  },
  {
    id: "redux",
    name: "Redux Toolkit",
    category: "Quản lý state",
    icon: "redux",
    url: "https://redux-toolkit.js.org/",
  },
  {
    id: "nodejs",
    name: "Node.js",
    category: "Môi trường backend",
    icon: "nodejs",
    url: "https://nodejs.org/",
  },
  {
    id: "mongodb",
    name: "MongoDB",
    category: "Cơ sở dữ liệu",
    icon: "mongodb",
    url: "https://www.mongodb.com/",
  },
  {
    id: "mysql",
    name: "MySQL",
    category: "Cơ sở dữ liệu",
    icon: "mysql",
    url: "https://www.mysql.com/",
  },
  {
    id: "git",
    name: "Git",
    category: "Quản lý phiên bản",
    icon: "git",
    url: "https://git-scm.com/",
  },
  {
    id: "html",
    name: "HTML5",
    category: "Ngôn ngữ đánh dấu",
    icon: "html",
    url: "https://www.w3.org/html/",
  },
  {
    id: "css",
    name: "CSS3",
    category: "Ngôn ngữ định kiểu",
    icon: "css",
    url: "https://www.w3.org/Style/CSS/Overview.en.html",
  },
  {
    id: "javascript",
    name: "JavaScript",
    category: "Ngôn ngữ lập trình",
    icon: "javascript",
    url: "https://www.javascript.com/",
  },
  {
    id: "cplusplus",
    name: "C++",
    category: "Ngôn ngữ lập trình",
    icon: "cplusplus",
    url: "https://www.cplusplus.com/",
  },
  {
    id: "java",
    name: "Java",
    category: "Ngôn ngữ lập trình",
    icon: "java",
    url: "https://www.java.com/",
  },
  {
    id: "figma",
    name: "Figma",
    category: "Thiết kế UI/UX",
    icon: "figma",
    url: "https://www.figma.com/",
  },
];

const projects: Project[] = [
  {
    id: "fengdesk",
    title: "FengDesk AI",
    featured: true,
    subtitle:
      "Nền tảng gợi ý cây phong thủy cho không gian làm việc & thương mại điện tử thông minh",
    category: "webApp",
    description:
      "Nền tảng thương mại điện tử cây phong thủy ứng dụng AI, mang đến gợi ý cá nhân hóa cho không gian làm việc và cây cảnh, trợ lý chatbot AI, trực quan hóa cây 3D, cùng trải nghiệm mua sắm và thanh toán trực tuyến tích hợp.",
    tags: [
      "Thương mại điện tử",
      "Gợi ý bằng AI",
      "Chatbot AI",
      "Trực quan 3D",
      "Thanh toán trực tuyến",
      "Xác thực OTP",
    ],
    imageUrl: "/images/fengdesk.io.vn_products (1).png",
    projectUrl: "https://fengdesk.io.vn/",
    role: "Lập trình viên Frontend chính",
    timeline: "5 tháng • 2026",
    team: "4 thành viên (Frontend & Backend)",
    platform: "Ứng dụng web responsive",
    deliverables: [
      "Giao diện web responsive",
      "Giao diện chatbot AI",
      "Trực quan hóa cây 3D",
      "Luồng thanh toán & giỏ hàng",
    ],
    overview: {
      problem:
        "Những người làm việc văn phòng hiện đại dành rất nhiều thời gian bên bàn làm việc và mong muốn không gian có decor tự nhiên, hài hòa. Tuy nhiên, tư vấn phong thủy truyền thống thường tốn kém và phức tạp, trong khi các cửa hàng cây cảnh trực tuyến thông thường thiếu hướng dẫn cá nhân hóa về loại cây phù hợp để cân bằng năng lượng và môi trường làm việc của từng người.",
      solution:
        "FengDesk AI kết nối thương mại điện tử hiện đại với triết lý phong thủy truyền thống thông qua trí tuệ nhân tạo. Người dùng nhập năm sinh và hướng bàn làm việc để nhận gợi ý cây phù hợp, tư vấn với chatbot AI thông minh, xem mô hình thực vật 3D và đặt mua cây với giao hàng tận nơi một cách liền mạch.",
      impact:
        "Mang đến một cửa hàng số mượt mà, có khả năng chuyển đổi cao với thời gian tải trang dưới một giây, kết xuất 3D tương tác ở 60fps trên trình duyệt di động hiện đại, cùng quy trình thanh toán trực quan với xác thực OTP tự động và nhiều phương thức thanh toán trực tuyến.",
    },
    features: [
      {
        title: "Công cụ gợi ý phong thủy thông minh",
        description:
          "Phân tích thuật toán để kết hợp mệnh của người dùng (Kim, Mộc, Thủy, Hỏa, Thổ) và hướng ánh sáng của không gian làm việc với loài cây và chất liệu chậu lý tưởng.",
        tag: "AI Engine",
      },
      {
        title: "Tư vấn viên AI hội thoại",
        description:
          "Chatbot hiểu ngữ cảnh, đưa ra lời khuyên tức thì về cách chăm sóc cây, hướng đặt bàn làm việc và các nguyên tắc hài hòa phong thủy.",
        tag: "NLP Chatbot",
      },
      {
        title: "Trực quan hóa bàn làm việc 3D tương tác",
        description:
          "Xem cây ở dạng 3D với xoay 360 độ, điều chỉnh tỉ lệ và kết xuất chân thực để hình dung cây phù hợp với không gian của bạn trước khi đặt hàng.",
        tag: "Đồ họa 3D",
      },
      {
        title: "Thương mại điện tử & thanh toán an toàn",
        description:
          "Hệ thống mua hàng hoàn chỉnh với theo dõi tồn kho thời gian thực, thanh toán trực tuyến đa cổng (PayOS / Ngân hàng) và xác thực khách hàng bằng OTP SMS.",
        tag: "Thanh toán",
      },
      {
        title: "Giao diện responsive & dễ tiếp cận",
        description:
          "Bố cục và thư viện component được cấu trúc cẩn thận, tối ưu để duyệt web nhanh trên điện thoại, máy tính bảng và màn hình desktop.",
        tag: "Hệ thống thiết kế",
      },
      {
        title: "Theo dõi đơn hàng & hướng dẫn chăm sóc cây",
        description:
          "Cổng thông tin người dùng với cập nhật trạng thái đơn hàng trực tiếp, lịch tưới cây và thông báo chăm sóc ánh sáng được tùy chỉnh.",
        tag: "Trải nghiệm người dùng",
      },
    ],
    techStack: [
      {
        category: "Kiến trúc Frontend",
        technologies: ["ReactJS", "TypeScript", "Tailwind CSS", "Motion"],
      },
      {
        category: "State & truy xuất dữ liệu",
        technologies: ["Redux Toolkit", "TanStack Query", "Axios", "REST APIs"],
      },
      {
        category: "Tương tác & AI",
        technologies: [
          "Three.js / Canvas",
          "AI Chatbot Integration",
          "PayOS Payment",
          "Email OTP",
        ],
      },
      {
        category: "Công cụ & hạ tầng",
        technologies: ["Git / GitHub", "Vercel", "Figma", "ESLint"],
      },
    ],
    gallery: [
      {
        url: "/images/fengdesk.io.vn_products (1).png",
        caption:
          "Danh mục sản phẩm trưng bày các loại cây phong thủy theo nhóm mệnh và giá bán.",
        title: "Danh mục & Bộ lọc",
      },
      {
        url: "/images/fengdesk.io.vn_products.png",
        caption:
          "Giao diện cửa hàng tương tác với thông tin cây chi tiết và nút thanh toán nhanh.",
        title: "Tổng quan cửa hàng",
      },
      {
        url: "/images/fengdesk.io.vn_products_1.png",
        caption:
          "Trang chi tiết sản phẩm với thiết kế responsive cho điện thoại, máy tính bảng và desktop.",
        title: "Trang chi tiết sản phẩm",
      },
      {
        url: "/images/fengdesk.io.vn_products_2.png",
        caption:
          "Xem cây 3D với xoay 360 độ, điều chỉnh tỉ lệ và kết xuất chân thực để hình dung cây phù hợp với không gian trước khi đặt hàng.",
        title: "Trực quan hóa cây 3D",
      },
      {
        url: "/images/fengdesk.io.vn_products_3.png",
        caption: "Giao diện chatbot AI tích hợp AI Engine.",
        title: "Chatbot AI",
      },
      {
        url: "/images/fengdesk.io.vn_checkout.png",
        caption:
          "Giao diện cửa hàng tương tác với thông tin cây chi tiết và nút thanh toán nhanh.",
        title: "Thanh toán",
      },
    ],
    challenges: [
      {
        title: "Cân bằng hiệu năng kết xuất 3D với thời gian tải trên di động",
        description:
          "Kết xuất lưới cây 3D đa giác cao gây tụt khung hình trên các thiết bị di động cấu hình thấp.",
        solution:
          "Tối ưu hình học 3D bằng định dạng GLTF/GLB nhẹ, nén texture atlas và chỉ tải vùng xem 3D khi cuộn tới.",
      },
      {
        title: "Quy trình thanh toán nhiều bước phức tạp & đồng bộ state",
        description:
          "Xử lý mã giảm giá động, chọn địa chỉ và chuyển hướng cổng thanh toán mà không làm mất trạng thái giỏ hàng.",
        solution:
          "Sử dụng Redux Toolkit với middleware lưu state và làm mới cache TanStack Query để đảm bảo state đồng bộ trong suốt quá trình chuyển giao thanh toán.",
      },
    ],
  },
  {
    id: "rescue-aid",
    title: "Rescue AID",
    subtitle: "Nền tảng ứng phó thiên tai & điều phối khẩn cấp",
    category: "webApp",
    description:
      "Nền tảng điều phối cứu trợ thiên tai kết nối người dân với đội cứu hộ thông qua bản đồ tương tác, báo cáo khẩn cấp thời gian thực, quản lý yêu cầu cứu hộ và xử lý quyên góp trực tuyến.",
    tags: [
      "Quản lý thiên tai",
      "Bản đồ tương tác",
      "Theo dõi thời gian thực",
      "Điều phối cứu hộ",
      "Quyên góp trực tuyến",
    ],
    imageUrl: "/images/rescue-aid.vercel.app_map.png",
    projectUrl: "https://rescue-aid.vercel.app/",
    role: "Lập trình viên Frontend chính",
    timeline: "3 tháng • 2026",
    team: "4 thành viên (Frontend, Backend & Mobile)",
    platform: "Ứng dụng web & di động quan trọng",
    deliverables: [
      "Bản đồ sự cố tương tác",
      "Luồng báo cáo SOS",
      "Cổng điều phối viên",
      "Bảng minh bạch quyên góp",
    ],
    overview: {
      problem:
        "Trong các thảm họa thiên nhiên như lũ lụt và bão, đường dây nóng khẩn cấp trở nên quá tải, dẫn đến chậm trễ trong việc xác định vị trí người bị mắc kẹt. Các đơn vị cứu hộ thiếu công cụ trực quan hóa không gian thống nhất cho các sự cố nghiêm trọng, trong khi nhà hảo tâm gặp khó khăn trong việc minh bạch nơi phân bổ nhu yếu phẩm và kinh phí.",
      solution:
        "Rescue AID tạo ra cầu nối chỉ huy thống nhất, thời gian thực giữa nạn nhân, đội cứu hộ tình nguyện và tổ chức cứu trợ. Người bị mắc kẹt gửi yêu cầu SOS kèm tọa độ GPS ngay lập tức, trong khi đội cứu hộ phân loại sự cố trên bản đồ GIS động và điều phối nguồn lực hiệu quả.",
      impact:
        "Rút ngắn đáng kể thời gian ứng phó bằng định vị chính xác tức thời và xếp hàng ưu tiên tự động. Được xây dựng cho tình huống băng thông thấp để đảm bảo vận hành ổn định trong điều kiện mạng không ổn định tại vùng thiên tai.",
    },
    features: [
      {
        title: "Bản đồ sự cố tương tác thời gian thực",
        description:
          "Giao diện bản đồ GIS hiệu năng cao hiển thị vùng ngập, vị trí người bị mắc kẹt, điểm trú ẩn an toàn và vị trí đội cứu hộ trực tiếp.",
        tag: "Bản đồ GIS",
      },
      {
        title: "SOS khẩn cấp một chạm",
        description:
          "Quy trình báo cáo tinh gọn cho phép nạn nhân gửi tọa độ GPS hiện tại, số thành viên hộ gia đình, tình trạng y tế khẩn cấp và ảnh đính kèm trong vài giây.",
        tag: "Cảnh báo khẩn cấp",
      },
      {
        title: "Điều phối cứu hộ & định tuyến trạng thái",
        description:
          "Bảng điều khiển phân loại cho nhân viên cứu trợ để phân công đội, cập nhật giai đoạn cứu hộ (Chờ xử lý, Đã điều phối, Đã cứu) và tránh triển khai trùng lặp.",
        tag: "Điều khiển điều phối",
      },
      {
        title: "Định vị điểm trú ẩn an toàn & theo dõi sức chứa",
        description:
          "Danh sách và bản đồ động các điểm trú ẩn cộng đồng đã được chứng nhận, hiển thị sức chứa giường còn trống, lương thực, nước uống sạch và sự hiện diện của nhân viên y tế.",
        tag: "Hậu cần trú ẩn",
      },
      {
        title: "Theo dõi quỹ cứu trợ minh bạch",
        description:
          "Bảng quyên góp công khai với minh bạch từng khoản về nguồn tiền tiếp nhận và chi phí vận hành cho nhu yếu phẩm, thuyền và cứu trợ y tế.",
        tag: "Sổ quyên góp",
      },
      {
        title: "Tối ưu offline cho băng thông thấp",
        description:
          "Bộ nhớ đệm lũy tiến và tài nguyên tối giản để đảm bảo hiển thị lần đầu và gửi biểu mẫu nhanh ngay cả trên mạng di động 2G/3G tại vùng bị bão.",
        tag: "Khả năng phục hồi",
      },
    ],
    techStack: [
      {
        category: "Lõi Frontend",
        technologies: ["ReactJS", "TypeScript", "Tailwind CSS", "Motion"],
      },
      {
        category: "Bản đồ & địa không gian",
        technologies: ["Vietmap", "Geolocation API", "GeoJSON"],
      },
      {
        category: "Dữ liệu & luồng state",
        technologies: ["Axios", "RESTful APIs", "WebSocket / Real-time"],
      },
      {
        category: "Triển khai & chất lượng",
        technologies: ["Vercel", "Git / GitHub", "ESLint", "Figma"],
      },
    ],
    gallery: [
      {
        url: "/images/rescue-aid.vercel.app_map.png",
        caption:
          "Giao diện bản đồ tương tác hiển thị các cụm sự cố, yêu cầu cứu hộ khẩn cấp và khu vực vận hành.",
        title: "Bản đồ khẩn cấp trực tiếp",
      },
    ],
    challenges: [
      {
        title: "Kết xuất hàng trăm ghim địa không gian trực tiếp một cách mượt mà",
        description:
          "Hiển thị hàng trăm cảnh báo thiên tai thời gian thực gây giật lag trình duyệt và giật khi kéo bản đồ trên màn hình di động.",
        solution:
          "Triển khai thuật toán gom cụm marker và truy vấn bounding box GeoJSON theo vùng nhìn để chỉ hiển thị các ghim trong khung bản đồ hiện tại.",
      },
      {
        title: "Đảm bảo khả năng sử dụng cao trong tình huống cực kỳ căng thẳng",
        description:
          "Nạn nhân trong tình huống khẩn cấp cần giao diện đơn giản nhất có thể, không quá tải nhận thức hay trường biểu mẫu không cần thiết.",
        solution:
          "Thiết kế modal SOS có độ tương phản cao, vùng chạm lớn, tự động lấy tọa độ GPS của trình duyệt chỉ với một lần chạm.",
      },
    ],
  },
  {
    id: "green-space",
    title: "Green Space",
    subtitle: "Nền tảng chăm sóc cây & phát triển bền vững ứng dụng AI",
    category: "academic",
    description:
      "Dự án khởi nghiệp học thuật tập trung kết hợp công nghệ AI và tính bền vững để tạo ra trải nghiệm chăm sóc cây thông minh hơn. Green Space cung cấp cho người dùng chatbot AI để tư vấn chăm sóc cây và hướng dẫn thực tế.",
    tags: [
      "Trí tuệ nhân tạo",
      "Chăm sóc cây",
      "Phát triển bền vững",
      "Chatbot AI",
    ],
    imageUrl: "/images/greenspace.io.vn_.png",
    projectUrl: "https://green-space.vercel.app/",
    role: "Lập trình viên Frontend chính",
    timeline: "3 tháng • 2026",
    team: "4 thành viên (Frontend, Backend & Mobile)",
    platform: "Ứng dụng web responsive",
    deliverables: [
      "Ứng dụng web responsive",
      "Chatbot chăm sóc cây ứng dụng AI",
      "Giao diện tư vấn chăm sóc cây",
      "Trải nghiệm số hướng tới phát triển bền vững",
    ],
    overview: {
      problem:
        "Nhiều người yêu cây, đặc biệt là người mới bắt đầu, gặp khó khăn trong việc tìm hướng dẫn chăm sóc cây phù hợp và thông tin đáng tin cậy. Việc hiểu nhu cầu tưới nước, điều kiện ánh sáng và cách chăm sóc cây đúng cách có thể là thách thức nếu không có tư vấn dễ tiếp cận.",
      solution:
        "Green Space là dự án khởi nghiệp khám phá việc ứng dụng công nghệ AI trong chăm sóc cây. Nền tảng tích hợp chatbot AI cho phép người dùng đặt câu hỏi về cây và nhận hướng dẫn, gợi ý theo dạng hội thoại.",
      impact:
        "Chứng minh cách công nghệ AI có thể được áp dụng vào nhu cầu chăm sóc cây hằng ngày, mang lại trải nghiệm tư vấn dễ tiếp cận hơn và thúc đẩy sự quan tâm đến lối sống bền vững.",
    },
    features: [
      {
        title: "Trợ lý chăm sóc cây ứng dụng AI",
        description:
          "Chatbot AI giúp người dùng tư vấn chăm sóc cây, trả lời câu hỏi về cây và hướng dẫn về tưới nước, ánh sáng và bảo dưỡng cây nói chung.",
        tag: "Tích hợp AI",
      },
      {
        title: "Hộp chat AI tương tác",
        description:
          "Cung cấp giao diện hội thoại để người dùng gửi câu hỏi bằng ngôn ngữ tự nhiên và nhận phản hồi do AI tạo cho việc tư vấn chăm sóc cây.",
        tag: "Chatbot AI",
      },
      {
        title: "Thông tin chăm sóc cây",
        description:
          "Trình bày thông tin và hướng dẫn chăm sóc cây giúp người dùng hiểu rõ hơn về việc bảo dưỡng cây và hình thành thói quen làm vườn lành mạnh hơn.",
        tag: "Chăm sóc cây",
      },
      {
        title: "Giao diện người dùng responsive",
        description:
          "Cung cấp giao diện sạch sẽ, lấy cảm hứng từ thiên nhiên với bố cục responsive và các phần tử tương tác để có trải nghiệm nhất quán trên mọi thiết bị.",
        tag: "Frontend",
      },
    ],
    techStack: [
      {
        category: "Lõi Frontend",
        technologies: ["ReactJS", "TypeScript", "Tailwind CSS"],
      },
      {
        category: "Tích hợp AI",
        technologies: ["OpenAI API", "Natural Language Processing"],
      },
      {
        category: "State & truy xuất dữ liệu",
        technologies: ["Redux Toolkit", "TanStack Query", "Axios", "REST APIs"],
      },
      {
        category: "Tương tác & AI",
        technologies: [
          "AI Chatbot Integration",
          "PayOS Payment",
          "Email OTP",
        ],
      },
    ],
    gallery: [
      {
        url: "/images/greenspace.io.vn_.png",
        caption:
          "Trang đích Green Space giới thiệu nền tảng chăm sóc cây và trải nghiệm tư vấn ứng dụng AI.",
        title: "Trang chủ",
      },
    ],
    challenges: [
      {
        title: "Tích hợp tư vấn chăm sóc cây ứng dụng AI",
        description:
          "Tích hợp chatbot AI vào nền tảng đồng thời đảm bảo người dùng có thể dễ dàng đặt câu hỏi về cây và nhận phản hồi phù hợp.",
        solution:
          "Tích hợp OpenAI API để hỗ trợ hội thoại ngôn ngữ tự nhiên, cho phép người dùng tương tác với trợ lý AI qua hộp chat chăm sóc cây chuyên dụng.",
      },
      {
        title: "Thiết kế trải nghiệm chat AI trực quan",
        description:
          "Tạo giao diện hội thoại dễ sử dụng đồng thời duy trì sự nhất quán về hình ảnh với thiết kế lấy cảm hứng từ thiên nhiên của nền tảng.",
        solution:
          "Phát triển giao diện chat responsive bằng ReactJS, TypeScript và Tailwind CSS, kết hợp Motion để tăng tính tương tác và cải thiện trải nghiệm người dùng.",
      },
      {
        title: "Dẫn dắt phát triển Frontend",
        description:
          "Điều phối phát triển frontend trong nhóm bốn thành viên, đảm bảo tính nhất quán giữa các component và giao diện của ứng dụng.",
        solution:
          "Chịu trách nhiệm phát triển frontend, tổ chức component và triển khai giao diện, đồng thời phối hợp với các thành viên backend và mobile.",
      },
    ],
  },
  {
    id: "quiz-app",
    title: "QuizBank",
    subtitle: "Ứng dụng quản lý bài kiểm tra & câu hỏi",
    category: "personal",
    description:
      "Ứng dụng quản lý bài kiểm tra nhẹ được xây dựng với MERN stack, cho phép người dùng quản lý dữ liệu liên quan đến bài kiểm tra thông qua các thao tác CRUD.",
    tags: ["MERN Stack", "CRUD", "Quản lý bài kiểm tra", "MongoDB"],
    imageUrl: "/images/quizbankv1.vercel.app_.png",
    projectUrl: "https://quizbankv1.vercel.app/",
    role: "Lập trình viên Full Stack",
    timeline: "1 tháng • 2025",
    team: "Dự án cá nhân",
    platform: "Ứng dụng web responsive",
    deliverables: [
      "Ứng dụng web responsive",
      "Hệ thống quản lý bài kiểm tra",
      "Chức năng CRUD",
    ],
    techStack: [
      {
        category: "Frontend",
        technologies: ["React.js"],
      },
      {
        category: "Backend",
        technologies: ["Node.js", "Express.js"],
      },
      {
        category: "Cơ sở dữ liệu",
        technologies: ["MongoDB"],
      },
    ],
  },
];

const content: SiteContent = {
  personal,
  heroSkills: [
    "ReactJS",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Redux Toolkit",
    "TanStack Query",
    "REST API",
    "Git",
  ],
  about,
  experience,
  stack,
  projects,
};

export default content;
