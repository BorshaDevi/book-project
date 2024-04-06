
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';
const Pages = () => {
    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const data = [
    {
        "bookId": "1",
        "bookName": "The Silent Patient",
        "author": "Alex Michaelides",
        "image": "https://i.ibb.co/pw7r3zt/top-view-mustard-copybook-around-white-flowers-dark.jpg",
        "review": "A gripping psychological thriller that keeps you guessing until the very end.",
        "totalPages": 336,
        "rating": 4.5,
        "category": "Mystery",
        "tags": ["Suspense", "Psychological"],
        "publisher": "Celadon Books",
        "yearOfPublishing": 2019
    },
    {
        "bookId": "2",
        "bookName": "Educated: A Memoir",
        "author": "Tara Westover",
        "image": "https://i.ibb.co/VHV72VX/flowery-book-separator.jpg",
        "review": "A powerful memoir of resilience and self-discovery.",
        "totalPages": 352,
        "rating": 4.7,
        "category": "Biography",
        "tags": ["Memoir", "Education"],
        "publisher": "Random House",
        "yearOfPublishing": 2018
    },
    {
        "bookId": "3",
        "bookName": "Little Fires Everywhere",
        "author": "Celeste Ng",
        "image": "https://i.ibb.co/jrggWsG/top-view-yellow-green-copybooks-along-with-white-flowers-dark-background.jpg",
        "review": "A thought-provoking exploration of family dynamics and societal norms.",
        "totalPages": 352,
        "rating": 4.2,
        "category": "Fiction",
        "tags": ["Family", "Drama"],
        "publisher": "Penguin Press",
        "yearOfPublishing": 2017
    },
    {
        "bookId": "4",
        "bookName": "Big Little Lies",
        "author": "Liane Moriarty",
        "image": "https://i.ibb.co/qj7HZKb/blue-book-cover.jpg",
        "review": "An addictive page-turner with richly developed characters and unexpected twists.",
        "totalPages": 460,
        "rating": 4.6,
        "category": "Thriller",
        "tags": ["Mystery", "Drama"],
        "publisher": "Penguin Books",
        "yearOfPublishing": 2014
    },
    {
        "bookId": "5",
        "bookName": "The Girl on the Train",
        "author": "Paula Hawkins",
        "image": "https://i.ibb.co/GPVpL7r/black-yellow-hardback-book.jpg",
        "review": "A gripping thriller with complex characters and a twisty plot.",
        "totalPages": 336,
        "rating": 4.0,
        "category": "Thriller",
        "tags": ["Suspense", "Mystery"],
        "publisher": "Riverhead Books",
        "yearOfPublishing": 2015
    },
    {
        "bookId": "6",
        "bookName": "The Night Circus",
        "author": "Erin Morgenstern",
        "image": "https://i.ibb.co/hs0NPBX/english-books-assortment-with-blue-background.jpg",
        "review": "A beautifully written, enchanting tale that transports you to a magical world.",
        "totalPages": 400,
        "rating": 4.4,
        "category": "Fantasy",
        "tags": ["Magic", "Romance"],
        "publisher": "Doubleday",
        "yearOfPublishing": 2011
    }
]


const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};
    return (
        <div className='mt-10 '>
          
    <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="bookName" />
      <YAxis />
      <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 20]} />
        ))}
      </Bar>
    </BarChart>
 


        </div>
    );
};
Pages.demoUrl = 'https://codesandbox.io/s/bar-chart-with-customized-shape-dusth';

export default Pages;