<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Edit Comment</title>
</head>
<body>
    <h1>Edit Comment</h1>
    <div>
        @if($errors->any() )
        <ul>
            @foreach($errors->all() as $error)
                <li>{{$error}}</li>
            @endforeach
        </ul> 
        @endif
    </div>
    
    <form method="post" action="{{ route('product.update', ['product' => $product])}}">
        @csrf
        @method('put')
        <div>
            <label for="name" >Name: </label>
            <input type="text" name="name"  placeholder="name" value="{{$product->name}}">
        </div>

        <div>
            <label for="qty" >Quantity: </label>
            <input type="text" name="qty"  placeholder="qty" value="{{$product->qty}}">
        </div>

        <div>
            <label for="price" >Price: </label>
            <input type="text" name="price"  placeholder="price" value="{{$product->price}}">
        </div>

        <div>
            <label for="description" >Description: </label>
            <input type="text" name="description"  placeholder="description" value="{{$product->description}}">
        </div>

        <div>
            <input type="submit" value="Save New Comment" />
        </div>

    </form>   
</body>
</html>