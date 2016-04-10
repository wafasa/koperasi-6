<h2 class="sidebar-title">Products</h2>
<?php foreach(getfrontproducts() as $prd){?>
	<div class="thubmnail-recent">
		<img src="<?php echo $prd->image;?>" class="recent-thumb" alt="">
		<h2><a href="single-product.html"><?php echo $prd->name;?></a></h2>
		<div class="product-sidebar-price">
			<ins><?php echo number_format($prd->sellprice);?></ins> <del><?php echo number_format($prd->dellprice);?></del>
		</div>                             
	</div>
<?php }?>
