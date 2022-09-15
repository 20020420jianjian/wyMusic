import { Button, Swipe, SwipeItem, Icon, Popup, Toast } from "vant";

let plugins = [Swipe, SwipeItem, Button, Icon, Popup, Toast];

export default function getVant(app) {
  plugins.forEach((item) => {
    return app.use(item);
  });
}
